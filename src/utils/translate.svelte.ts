import type { translateObjType } from './translateType';
import lang from '../stores/languageStore';
import { derived } from 'svelte/store';

export const translate = derived(lang, ($lang) => {
	return (translateObj: translateObjType | undefined) => {
		if (translateObj === undefined) return 'undefined';
		return $lang === 'pl' ? translateObj.pl : translateObj.eng;
	};
});
