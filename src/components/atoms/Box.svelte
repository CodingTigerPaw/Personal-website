<script lang="ts">
import {twMerge} from 'tailwind-merge' 
	interface Props {
		customClass?: string | undefined;
		transparent?: boolean | undefined;
		noPaddings?: boolean | undefined;
		children?: import('svelte').Snippet;
	}

	let {
		customClass = '',
		transparent = false,
		noPaddings = false,
		children
	}: Props = $props();

</script>

<div class={twMerge(transparent ? 'bg-transparent': 'bg-frenchGrey  border rounded-lg', !noPaddings && 'mx-8',` min-h-6`, customClass )}>
{@render children?.()}
</div>