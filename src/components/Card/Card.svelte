<script lang="ts">
	import type { translateObjType } from '../../utils/translateType';
	import Popup from '../Popup.svelte';
	import CardContent from './CardContent.svelte';
	import Device from 'svelte-device-info';

	interface Props {
		icon?: string | undefined;
		text?: translateObjType | undefined | string;
		header?: translateObjType | undefined | string;
		image?: string | undefined;
		link?: string;
		customClass?: string | undefined;
		customIconClass?: string | undefined;
		hideButton?: boolean | undefined;
	}
	let isModal: boolean = $state(false);

	const setModal = () => {
		if (!Device.isMobile && window.innerWidth > 1024) {
			isModal = !isModal;
		}
	};
	let {
		icon = undefined,
		text = undefined,
		header = undefined,
		image = undefined,
		link = undefined,
		customClass = undefined,
		customIconClass = undefined,
		hideButton = false
	}: Props = $props();
</script>

<span tabindex="1" onclick={setModal} class=" lg:w-1/5">
	<CardContent {text} {icon} {header} {image} {link} {customClass} {customIconClass} {hideButton} />
	{#if link}
		<div class="text-center hover:text-orange-500">
			<a href={link} target="_blank">{link}</a>
		</div>
	{/if}
</span>
<Popup bind:isVisible={isModal} customClass="top-12">
	<CardContent {text} {icon} {header} {image} customClass="sm:w-fit sm:m-0 sm:p-0" />
</Popup>
