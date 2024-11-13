<script lang="ts">
	import type { translateObjType } from '../../utils/translateType';
	import Popup from '../Popup.svelte';
	import CardContent from './CardContent.svelte';
	import Device from 'svelte-device-info';

	interface Props {
		icon?: string | undefined;
		text?: translateObjType | undefined;
		header?: translateObjType | undefined;
		image?: string | undefined;
		link?: string;
		customClass?: string | undefined;
		customIconClass?: string | undefined;
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
		customIconClass = undefined
	}: Props = $props();
</script>

<span onclick={setModal} class="lg:w-1/5">
	<CardContent {text} {icon} {header} {image} {link} {customClass} {customIconClass} />
</span>

<Popup bind:isVisible={isModal} customClass="top-12">
	<CardContent {text} {icon} {header} {image} customClass="sm:w-fit sm:m-0 sm:p-0" />
</Popup>
