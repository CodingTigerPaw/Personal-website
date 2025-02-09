<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { twMerge } from 'tailwind-merge';
	import { size } from '../../../../const';
	import type { ButtonAtomProps } from '../../../../types/buttonAtomType';

	let { text, buttonSize = undefined, customClass }: ButtonAtomProps = $props();

	const setSize = (buttonSize: size | undefined): string | undefined => {
		if (buttonSize !== undefined) {
			if (buttonSize === size.sm) return 'p-1';
			if (buttonSize === size.md) return 'p-2 text-md';
			if (buttonSize === size.xl) return 'p-3 text-xl';
		}
		return 'p-1';
	};
</script>

<button
	onclick={bubble('click')}
	class={twMerge(
		setSize(buttonSize),
		'rounded-lg bg-gradient-to-b from-orange-500 to-90% to-orange-800 hover:text-white',
		customClass
	)}
>
	{text}
</button>
