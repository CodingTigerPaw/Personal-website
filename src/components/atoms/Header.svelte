<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { size } from '../../const';
	import type { HeaderProps } from '../../types/headerType';

	let {
		text,
		textSize = size.sm,
		centered = false,
		capitalized = false,
		customClass = undefined,
		background = undefined
	}: HeaderProps = $props();

	let setFontSize = (fontSize: size | undefined): string => {
		if (size !== undefined) {
			if (fontSize === size.sm) return 'text-sm';
			if (fontSize === size.md) return 'text-base';
			if (fontSize === size.lg) return 'text-xl';
			if (fontSize === size.xl) return 'text-2xl';
			if (fontSize === size.xxl) return 'text-[48px]';
		}
		return '';
	};
</script>

{#if !background}
	<h1
		class={twMerge(
			setFontSize(textSize),
			centered && 'text-center',
			capitalized && 'capitalize',
			customClass
		)}
	>
		{text}
	</h1>
{:else}
	<div class="w-full flex justify-center">
		<span
			class={twMerge(
				'p-1 rounded-lg',
				setFontSize(textSize),
				capitalized && 'capitalize',
				customClass
			)}
		>
			{text}
		</span>
	</div>
{/if}
