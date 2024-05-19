# langy

Text language detection with ISO 639-1

## Install

```
$ npm i @yoannchb/langy
```

## How to use ?

```js
import { langy, langySupportedLanguages } from 'langy';

console.log(langySupportedLanguages());
// [ 'fr', 'en', 'da', 'af', ... ]

const result = langy(
  'Hello everyone I hope you had a great day ! Dont forget to do your homework after school !'
);
console.log(result);
/*
 {
      best: 'en',
      sortedLangs: [
        'en', 'th', 'zh', 'ko', 'vi', 'bn', ...
      ],
      probabilities: {
        af: 0.01878606971307375,
        sq: 0.02072365854012674,
        bn: 0.03575892165723129,
        zh: 0.061809341825298514,
        da: 0.031837353029780316,
        en: 0.14024071437431812,
        ...
      }
    }
 */
```
