import type { Prop } from './prop';
import { size } from '../const';

export interface ButtonAtomProps {
	text: Prop<string>;
	buttonSize?: Prop<size>;
	customClass?: Prop<string>;
}
