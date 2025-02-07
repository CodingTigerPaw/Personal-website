<script lang="ts">
	import { size } from '../../../const';
	import ButtonAtom from './atoms/ButtonAtom.svelte';

	interface Props {
		text?: string | undefined;
		buttonSize?: size | undefined;
		isLink?: Boolean | undefined;
		href?: string | undefined;
		customClass?: string | undefined;
	}

	let {
		text = undefined,
		buttonSize = undefined,
		isLink = undefined,
		href = undefined,
		customClass = undefined
	}: Props = $props();
</script>

{#if isLink && href}
	<a {href}>
		<ButtonAtom on:click {text} {buttonSize} {customClass} />
	</a>
{:else}
	<ButtonAtom on:click {text} {buttonSize} {customClass} />
{/if}
