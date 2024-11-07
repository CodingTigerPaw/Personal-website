<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { translation } from '../../const';

	interface Props {
		text: string | translation | undefined;
		customClass?: string | undefined;
	}

	let { text, customClass = undefined }: Props = $props();
</script>

<p class={twMerge(customClass)}>
	{text}
</p>
