<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface Props {
		customClass?: string | undefined;
		color?: string | undefined;
		text?: string | undefined;
	}

	let { customClass = undefined, color = undefined, text = undefined }: Props = $props();
</script>

<span
	class={twMerge(
		'absolute  text-2xl p-1 rounded-lg hover:scale-110 transition-all',
		color,
		customClass
	)}
>
	{text}
</span>
