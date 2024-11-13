<script>
	import { size } from '../const';
	import Header from './atoms/Header.svelte';
	import Card from './Card/Card.svelte';
	import { Tech } from '../const';
</script>

<div class=" min-h-dvh bg-blue text-white">
	<Header text="technologies" centered capitalized textSize={size.xxl} />
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
