import langy from '../dist/index.js';

describe('Test langy langage detection', () => {
  it('Should find french', () => {
    const result = langy("Bonjour tout le monde j'espère que vous avez passé une bonne journée.");
    expect(result.best).toBe('fr');
  });

  it('Should find english', () => {
    const result = langy(
      'Hello everyone I hope you had a great day today. Dont forget to give a comment about what you think of this program.'
    );
    expect(result.best).toBe('en');
  });

  it('Should find english and french', () => {
    const result = langy(
      "Bonjour tout le monde j'espère que vous avez passé une bonne journée. Hello everyone I hope you had a great day today. Dont forget to give a comment about what you think of this program."
    );
    expect(result.best).toBe('en');
    expect(result.probabilities.fr).toBeTruthy();
    expect(result.probabilities.en).toBeTruthy();

    expect(result.probabilities.fr > 0).toBeTruthy();
    expect(result.probabilities.en > 0).toBeTruthy();
    expect(result.probabilities.fr < 1).toBeTruthy();
    expect(result.probabilities.en < 1).toBeTruthy();

    expect(result.probabilities.en > result.probabilities.fr).toBeTruthy();
  });
});
