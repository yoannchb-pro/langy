import data from './dataset.json';

type Result = {
  best: string;
  probabilities: {
    [lang: string]: number;
  };
};

/**
 * Tokenize the text to only get the words
 * @param text
 * @returns
 */
function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[\W_]+/g, ' ')
    .trim()
    .split(/\s+/);
}

/**
 * Give a sorted list of the detected langage from a text
 * @param text
 * @returns
 */
function langy(text: string): Result {
  const tokens = tokenize(text);
  const dataEntries = Object.entries(data);
  const result: Result = {
    best: '',
    probabilities: {}
  };

  let totalWordsFound = 0;

  for (const token of tokens) {
    for (const [lang, words] of dataEntries) {
      if (!(words as string[]).includes(token)) continue;

      totalWordsFound++;

      if (!(lang in result.probabilities)) {
        result.probabilities[lang] = 1;
      } else {
        result.probabilities[lang]++;
      }
    }
  }

  let bestLang = '';
  let bestScore = 0;

  for (const lang in result.probabilities) {
    const proba = result.probabilities[lang] / totalWordsFound;
    result.probabilities[lang] = proba;

    if (proba > bestScore) {
      bestLang = lang;
      bestScore = proba;
    }
  }

  result.best = bestLang;

  return result;
}

export default langy;
