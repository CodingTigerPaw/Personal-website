<script>
	import { size } from '../const';
	import Header from './atoms/Header.svelte';
	import Card from './Card/Card.svelte';
	import reactIcon from '../lib/icons/react.png';
	import tailwind from '../lib/icons/tailwind.png';
</script>

<div class=" h-full sm:h-screen bg-blue text-white">
	<Header text="technologies" centered capitalized textSize={size.xl} />
	<div class="flex flex-col sm:flex-row justify-center">
		<Card icon={reactIcon} text={{ eng: 'react', pl: 'react pl' }} header={'react!'} />
		<Card icon={tailwind} text={'tailwind'} header={'taiwind'} />
		<Card icon={reactIcon} text={'react'} header={'react!'} />
		<Card icon={tailwind} text={'tailwind'} header={'taiwind'} />
	</div>
</div>
