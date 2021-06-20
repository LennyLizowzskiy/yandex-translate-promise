const needle = require('needle');

const apilink = 'https://translate.yandex.net/api/v1.5/tr.json';


class Translate {
    constructor (key) {
        this.key = `key=${key}`;
    }

    // https://yandex.com/dev/translate/doc/dg/reference/getLangs.html
    async listLanguages(ui) {
        return needle('get', `${apilink}/getLangs?${this.key}&ui=${ui}`).then((res) => {
            return res.body;
        });
    }
    list = this.listLanguages;

    // https://yandex.com/dev/translate/doc/dg/reference/detect.html
    async detectLanguage(text, hint) {
        return needle('get', `${apilink}/detect?${this.key}&text=${text}${hint ? `&hint=${hint}` : ''}`).then((res) => {
            return res.body;
        });
    }
    detect = this.detectLanguage;

    // https://yandex.com/dev/translate/doc/dg/reference/translate.html
    async translate(text, lang, format, options) {
        return needle('get', `${apilink}/translate?${this.key}&text=${text}&lang=${lang}${format ? `&format=${format}` : ''}${options ? `&options=${options}` : ''}`).then((res) => {
            return res.body;
        })
    }
    translateGet = this.translate;

    async translatePost(text, lang, format, options) {
        return needle('post', `${apilink}/translate`, {
            key: this.key,
            text: text,
            lang: lang,
            formtat: format,
            options: options
        }).then((res) => {
            return res.body;
        })
    }
}

module.exports = Translate;