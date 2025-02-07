<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { twMerge } from 'tailwind-merge';
	import { size } from '../../../../const';
	interface Props {
		text: string | undefined;
		buttonSize?: size | undefined;
		customClass?: string | undefined;
	}

	let { text, buttonSize = undefined, customClass }: Props = $props();

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
