<script>
	import { size } from '../const';
	import Box from './atoms/Box.svelte';
	import Header from './atoms/Header.svelte';
	import TextBlock from './atoms/TextBlock.svelte';
	import { LandingPage } from '../const';
	import Button from './atoms/Button/Button.svelte';
	import Icon from './atoms/Icon.svelte';
	import code from '../lib/icons/code.png';
	import Bean from './atoms/Bean.svelte';
	import { translate } from '../utils/translate.svelte';
</script>

<div class="h-screen bg-blue">
	<Box transparent={true} customClass="p-4 sm:p-16 text-white sm:w-1/2">
		<Header text={LandingPage.header} textSize={size.xxl} />
		<div class="bg-orange-500 h-1 w-[100px] sm:w-[200px] bg-p"></div>
		<TextBlock
			customClass=" text-[20px] sm:text-[25px] p-2 "
			text={$translate(LandingPage.description)}
		/>
		<div class=" h-[100px]"></div>
		<Button on:click text={$translate(LandingPage.buttonText)} buttonSize={size.md} />
	</Box>
	<div class="absolute top-[180px] hidden lg:block right-0 translate-x-[300px]">
		<Icon src={code} customClass="invert h-[800px]" />
		<Bean
			text={$translate(LandingPage.beanReliability)}
			color="bg-aureolin"
			customClass=" top-[150px] left-[-50px]"
		/>
		<Bean
			text={$translate(LandingPage.beanPassion)}
			color="bg-purple-400"
			customClass="top-[250px] left-[-75px]"
		/>
	</div>
</div>
