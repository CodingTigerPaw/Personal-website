<script>
	import { size } from '../const';
	import Header from './atoms/Header.svelte';
	import Card from './Card/Card.svelte';
	import { ProjectsPage } from '../const';
</script>

<div class=" h-full sm:h-screen gradient text-white">
	<Header text="Projekty" centered capitalized textSize={size.xl} />
	<div class="flex flex-col sm:flex-row justify-center">
		{#each ProjectsPage as Project}
			<Card
				icon={Project.icon}
				text={Project.text}
				header={Project.header}
				link={Project.link}
				hideButton
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
