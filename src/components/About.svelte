<script lang="ts">
	import { size } from '../const';
	import Button from './atoms/Button/Button.svelte';
	import Header from './atoms/Header.svelte';
	import TextBlock from './atoms/TextBlock.svelte';
	import { translate } from '../utils/translate.svelte';
	import { About } from '../const';
</script>

<div class="min-h-screen bg-blue">
	<Header centered customClass="text-white" text={$translate(About.header)} textSize={size.xxl} />
	<TextBlock customClass="text-white" text="text2" />

	{#each About.details as details}
		<Header
			centered
			customClass="text-white"
			text={$translate(details.header)}
			textSize={size.xl}
		/>
		<TextBlock customClass="text-white px-12 pb-8" text={$translate(details.descrition)} />
	{/each}
</div>
