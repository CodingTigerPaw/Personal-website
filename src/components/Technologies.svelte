<script>
	import { size } from '../const';
	import Header from './atoms/Header.svelte';
	import Card from './Card/Card.svelte';
	import { Tech } from '../const';
</script>

<div class=" h-screen sm:h-screen bg-blue text-white">
	<Header text="technologies" centered capitalized textSize={size.xl} />
	<div class="flex flex-col sm:flex-row justify-center">
		{#each Tech as tech}
			<Card icon={tech.icon} text={tech.text} header={tech.header} />
		{/each}
	</div>
</div>
