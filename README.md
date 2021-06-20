# Yandex Translate Web API wrapper for Node.js

## Installation
1. Get your own Yandex Translate API key at https://translate.yandex.com/developers/keys to make wrapper work
2. Install this package:
```npm
npm i yandex-translate-promise
```

## Usage
```javascript
const YandexTranslate = require('yandex-translate-promise');
const yatrans = new YandexTranslate(process.env.API_KEY); // from Step 1 in Installation

// ...
```

## API Methods
```javascript
yatrans.listLanguages(ui)
```
Alias method: `yatrans.list(ui)`

[**Get a list of supported languages**](https://yandex.com/dev/translate/doc/dg/reference/getLangs.html)

&nbsp;
```javascript
yatrans.detectLanguage(text, hint)
```
Alias method: `yatrans.detect(text, hint)`

[**Determines the language the given text is written in**](https://yandex.com/dev/translate/doc/dg/reference/detect.html)

&nbsp;
```javascript
yatrans.translate(ui) // GET method internally
```
Alias GET method: `yatrans.translateGet(text, lang, format, options)`

Alias POST method: `yatrans.translatePost(text, lang, format, options)`

[**Translates a text**](https://yandex.com/dev/translate/doc/dg/reference/translate.html)