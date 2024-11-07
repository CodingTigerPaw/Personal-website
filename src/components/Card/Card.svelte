<script lang="ts">
	import type { translateObjType } from '../../utils/translateType';
	import Popup from '../Popup.svelte';
	import CardContent from './CardContent.svelte';
	import { isMobile } from '../../stores/isMobileStore';
	import Device from 'svelte-device-info';

	interface Props {
		icon?: string | undefined;
		text?: translateObjType | undefined;
		header?: translateObjType | undefined;
	}
	let isModal: boolean = $state(false);

	const setModal = () => {
		if (!Device.isMobile) {
			isModal = !isModal;
		}
	};
	let { icon = undefined, text = undefined, header = undefined }: Props = $props();
</script>

<span onclick={setModal} class="sm:w-1/5">
	<CardContent {text} {icon} {header} />
</span>

<Popup bind:isVisible={isModal} customClass="top-12">
	<CardContent {text} {icon} {header} customClass="sm:w-fit sm:m-0 sm:p-0" />
</Popup>
