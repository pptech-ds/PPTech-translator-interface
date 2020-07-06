import '../scss/app.scss';

import './_vendor';
import Fetch from './Util/Fetch';
import $ from 'jquery';
import Translator from './Util/Translate';

const $form: JQuery<HTMLElement> = $('#form');
const $start: JQuery<HTMLElement> = $('#start');
const $language: JQuery<HTMLElement> = $('#language');
const $text2Translate: JQuery<HTMLElement> = $('#text2Translate');
const $textTranslated: JQuery<HTMLElement> = $('#textTranslated');

$form.on('submit', async e => {
    e.preventDefault();

    let language = $language.val().toString();
    let text2Translate = $text2Translate.val().toString();

    $start.attr('disabled', 'disabled');

    try {
        const t0 = performance.now();
        let textTranslated = await start(text2Translate, language);
        const t1 = performance.now();

        $textTranslated.val(textTranslated);
        console.log('Translation: ' + (t1 - t0) + ' milliseconds.');
    } catch (e) {
        console.log(e);
    }

    $start.removeAttr('disabled');
});

async function start(text2Translate: string, language: string) {
    const fetch = new Fetch();
    const translator = new Translator(fetch);

    return await translator.translate(text2Translate, language);
}