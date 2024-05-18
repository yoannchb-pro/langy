# langy

Text language detection with ISO 639-1

## Install

```
$ npm i @yoannchb/langy
```

## How to use ?

```js
import langy from 'langy';

const result = langy(
  'Hello everyone I hope you had a great day ! Dont forget to do your homework after school !'
);
console.log(result);
/*
    {
      best: 'en',
      probabilities: {
        af: 0.019337016574585635,
        sq: 0.024861878453038673,
        bn: 0.03314917127071823,
        zh: 0.04143646408839779,
        da: 0.03314917127071823,
        en: 0.04696132596685083,
        hi: 0.03038674033149171,
        hu: 0.027624309392265192,
        id: 0.03314917127071823,
        ko: 0.04143646408839779,
        pl: 0.024861878453038673,
        ro: 0.024861878453038673,
        sr: 0.019337016574585635,
        sk: 0.027624309392265192,
        th: 0.04419889502762431,
        vi: 0.04143646408839779,
        ar: 0.016574585635359115,
        bg: 0.013812154696132596,
        ca: 0.019337016574585635,
        cs: 0.024861878453038673,
        nl: 0.03038674033149171,
        eo: 0.016574585635359115,
        et: 0.016574585635359115,
        fa: 0.016574585635359115,
        fi: 0.013812154696132596,
        de: 0.016574585635359115,
        el: 0.016574585635359115,
        he: 0.013812154696132596,
        it: 0.022099447513812154,
        ja: 0.024861878453038673,
        lv: 0.016574585635359115,
        lt: 0.016574585635359115,
        mk: 0.013812154696132596,
        no: 0.027624309392265192,
        pt: 0.022099447513812154,
        ru: 0.016574585635359115,
        sl: 0.019337016574585635,
        es: 0.016574585635359115,
        sv: 0.024861878453038673,
        tr: 0.019337016574585635,
        uk: 0.019337016574585635,
        fr: 0.008287292817679558,
        kk: 0.0027624309392265192
      }
    }
 */
```
