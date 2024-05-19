import data from './dataset.json';

type Result = {
  best: string;
  sortedLangs: string[];
  probabilities: Record<string, number>;
};

/**
 * Normalize text to standardize it for comparison, preserving accents and diacritics.
 * @param text
 * @returns
 */
function normalize(text: string): string {
  return text.normalize('NFD').toLowerCase();
}

/**
 * Tokenize the text to only get the words, considering normalized text.
 * @param text
 * @returns
 */
function tokenize(text: string): string[] {
  return normalize(text)
    .replace(/[^a-z\u00C0-\u00FF]+/gi, ' ') // Remove not letter/accent char
    .trim()
    .split(/\s+/);
}

/**
 * Give the list of supported languages in ISO639-1 format.
 * @returns
 */
function langySupportedLanguages(): string[] {
  return Object.keys(data);
}

/**
 * Calculate the weight for each word based on its frequency across languages.
 * @param tokens
 * @param dataEntries
 * @returns
 */
function calculateWordWeights(
  tokens: string[],
  dataEntries: [string, string[]][]
): Record<string, Record<string, number>> {
  const wordWeights: Record<string, Record<string, number>> = {};
  const wordCounts: Record<string, number> = {};

  // Count occurrences of each word in each language
  for (const token of tokens) {
    for (const [lang, words] of dataEntries) {
      if (words.includes(token)) {
        if (!wordWeights[token]) {
          wordWeights[token] = {};
        }
        wordWeights[token][lang] = (wordWeights[token][lang] || 0) + 1;
        wordCounts[token] = (wordCounts[token] || 0) + 1;
      }
    }
  }

  // Normalize weights by the total number of languages a word appears in
  for (const [word, counts] of Object.entries(wordWeights)) {
    const totalAppearance = Object.values(counts).reduce((sum, count) => sum + count, 0);
    for (const lang in counts) {
      wordWeights[word][lang] = counts[lang] / totalAppearance;
    }
  }

  return wordWeights;
}

/**
 * Give a sorted list of the detected language from a text.
 * @param text
 * @returns
 */
function langy(text: string): Result {
  const tokens = tokenize(text);
  const dataEntries = Object.entries(data);
  const wordWeights = calculateWordWeights(tokens, dataEntries);
  const result: Result = {
    best: '',
    sortedLangs: [],
    probabilities: {}
  };

  for (const token of tokens) {
    if (wordWeights[token]) {
      for (const [lang, weight] of Object.entries(wordWeights[token])) {
        result.probabilities[lang] = (result.probabilities[lang] || 0) + weight;
      }
    }
  }

  let bestLang = '';
  let bestScore = -Infinity;

  // Normalize probabilities and find the best language
  const totalWeights = Object.values(result.probabilities).reduce((sum, prob) => sum + prob, 0);
  for (const lang in result.probabilities) {
    const proba = result.probabilities[lang] / totalWeights;
    result.probabilities[lang] = proba;

    if (proba > bestScore) {
      bestLang = lang;
      bestScore = proba;
    }
  }

  result.best = bestLang;
  result.sortedLangs = Object.keys(result.probabilities).sort(
    (a, b) => result.probabilities[b] - result.probabilities[a]
  );

  return result;
}

export { langy, langySupportedLanguages };
