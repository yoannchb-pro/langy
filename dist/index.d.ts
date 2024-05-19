type Result = {
    best: string;
    sortedLangs: string[];
    probabilities: Record<string, number>;
};
/**
 * Give the list of supported languages in ISO639-1 format.
 * @returns
 */
declare function langySupportedLanguages(): string[];
/**
 * Give a sorted list of the detected language from a text.
 * @param text
 * @returns
 */
declare function langy(text: string): Result;
export { langy, langySupportedLanguages };
