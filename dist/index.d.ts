type Result = {
    best: string;
    probabilities: {
        [lang: string]: number;
    };
};
/**
 * Give a sorted list of the detected langage from a text
 * @param text
 * @returns
 */
declare function langy(text: string): Result;
export { langy as default };
