import type { Prop } from './prop';
import type { translation } from '../const';
export interface HeaderProps {
	text: Prop<string | translation>;
	textSize?: Prop<size>;
	centered?: Prop<boolean>;
	capitalized?: Prop<boolean>;
	customClass?: Prop<string>;
	background?: Prop<boolean>;
}
