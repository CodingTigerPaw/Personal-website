<script lang="ts">
	import { getContext } from 'svelte';
	import { Contact } from '../const';
	import Icon from './atoms/Icon.svelte';

	const parentInfo = getContext<string>('parent');
</script>

{#if parentInfo === 'popup'}
	<div class="flex flex-col gap-3">
		<div class="flex flex-row text-black">
			<Icon src={Contact.github.icon} customClass="w-12" />
			<span class="my-auto ml-2 hover:text-orange-600">
				<a href="https://github.com/CodingTigerPaw" target="_blank">{Contact.github.link}</a>
			</span>
		</div>
		<div class="flex flex-row text-black">
			<Icon src={Contact.email.icon} customClass="w-12" />
			<span class="my-auto ml-2 hover:text-orange-600">
				<a href="mailto:{Contact.email.mail}"> {Contact.email.mail}</a>
			</span>
		</div>
		<div class="flex flex-row text-black">
			<Icon src={Contact.phone.icon} customClass="w-12" />
			<span class="my-auto ml-2 hover:text-orange-600">
				<a href="tel:{Contact.phone.number}">{Contact.phone.number}</a>
			</span>
		</div>
	</div>
{/if}
