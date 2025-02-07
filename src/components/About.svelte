<script lang="ts">
	import { size } from '../const';
	import Header from './atoms/Header.svelte';
	import TextBlock from './atoms/TextBlock.svelte';
	import { translate } from '../utils/translate.svelte';
	import { About } from '../const';
	import '@fontsource/poppins';
</script>

<div class="min-h-screen gradient poppins">
	<Header centered customClass="text-white" text={$translate(About.header)} textSize={size.xxl} />

	{#each About.details as details}
		<Header
			centered
			customClass="text-white p-2 py-6"
			text={$translate(details.header)}
			textSize={size.xl}
		/>
		<TextBlock
			customClass="text-white px-6 lg:px-[200px] pb-8 text-[22px]"
			text={$translate(details.descrition)}
		/>
	{/each}
</div>

<style>
	.gradient {
		background: rgb(0, 0, 0);
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 1) 5%,
			rgba(14, 22, 54, 1) 36%,
			rgba(14, 22, 54, 1) 64%,
			rgba(0, 0, 0, 1) 95%
		);
	}
	.poppins {
		font-family: 'Poppins', sans-serif;
	}
</style>
