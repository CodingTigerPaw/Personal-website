<script>
	import { size } from '../const';
	import Header from './atoms/Header.svelte';
	import Card from './Card/Card.svelte';
	import { Tech } from '../const';
	import { TechPageHeader } from '../const';
	import { translate } from '../utils/translate.svelte';
</script>

<div class=" min-h-dvh gradient text-white">
	<Header text={$translate(TechPageHeader.header)} centered capitalized textSize={size.xxl} />
	<Header text="Frameworks" centered capitalized textSize={size.xl} />

	<div class="flex flex-col sm:flex-row justify-center flex-wrap">
		{#each Tech as tech}
			<Card
				icon={tech.icon}
				text={tech.text}
				header={tech.header}
				customClass={tech.customClass}
				customIconClass={tech.customIconClass}
			/>
		{/each}
	</div>
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
</style>
