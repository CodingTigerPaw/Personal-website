<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import Icon from './atoms/Icon.svelte';
	import closeIcon from '../lib/icons/close.png';

	interface Props {
		Comp?: Component;
		children?: Snippet;
		isVisible?: boolean;
		customClass?: string;
	}

	let { Comp, isVisible = $bindable(false), children, customClass }: Props = $props();

	setContext('parent', 'popup');

	const closePopup = () => {
		isVisible = !isVisible;
		console.log(isVisible);
	};
</script>

<div class={twMerge(isVisible ? 'block' : 'hidden', 'absolute h-full w-full')}>
	<div
		class={twMerge(
			'bg-white relative w-5/6 md:w-[400px] md:left-1/2 md:translate-x-[-200px] top-1/4 p-4 rounded-md mx-12 md:max-w-screen border z-50',
			customClass
		)}
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span class="cursor-pointer" onclick={closePopup}>
			<Icon src={closeIcon} customClass="w-4 mb-4" />
		</span>
		{#if Comp !== undefined}
			<Comp />
		{:else}
			{@render children?.()}
		{/if}
	</div>
</div>
