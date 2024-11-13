<script lang="ts">
	import TextBlock from '../atoms/TextBlock.svelte';
	import Icon from '../atoms/Icon.svelte';
	import Header from '../atoms/Header.svelte';
	import type { translateObjType } from '../../utils/translateType';
	import { translate } from '../../utils/translate.svelte';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import Device from 'svelte-device-info';

	interface Props {
		icon?: string | undefined;
		text?: translateObjType | undefined;
		header?: translateObjType | undefined;
		image?: string | undefined;
		link?: string | undefined;
		customClass?: string | undefined;
		customIconClass?: string | undefined;
	}
	let isExpanded: boolean = $state(false);

	let {
		icon = undefined,
		text = undefined,
		header = undefined,
		image = undefined,
		link = undefined,
		customClass = undefined,
		customIconClass = undefined
	}: Props = $props();

	const parentInfo = getContext<string>('parent');

	const isModal = () => {
		if (parentInfo !== 'popup') return false;
		return true;
	};
</script>

<!-- add p-1 if nothing else working -->
<div
	class={twMerge('bg-white text-black rounded-xl m-6 p-1 sm:m-8 md:cursor-pointer', customClass)}
>
	{#if icon}
		<div
			class={twMerge(
				'w-[50px] sm:w-[70px] m-auto mt-[-25px] sm:mt-[-35px] relative z-20',
				customIconClass
			)}
		>
			<Icon src={icon} />
		</div>
	{/if}
	{#if image}
		<img src={image} alt="img" class="relative rounded-t-xl -translate-y-[29px] w-full" />
	{/if}

	{#if link}
		<a href={link}>{link}</a>
	{/if}
	<Header background text={$translate(header)} centered customClass="bg-orange-400" />
	<TextBlock
		text={$translate(text)}
		customClass={twMerge(
			'px-4 break-words',
			!isExpanded && 'line-clamp-3 md:line-clamp-6',
			isModal() && 'md:line-clamp-none'
		)}
	/>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	{#if parentInfo !== 'popup'}
		<div
			class=" p-1 m-2 bg-orange-400 rounded-lg w-fit mx-auto lg:mx-4 cursor-pointer hover:text-white"
			onclick={() => {
				if (Device.isMobile === true || window.innerWidth < 1024) {
					isExpanded = !isExpanded;
				}
			}}
		>
			More
		</div>
	{/if}
</div>
