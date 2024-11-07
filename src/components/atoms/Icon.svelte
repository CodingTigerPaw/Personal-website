<script lang="ts">
	interface Props {
		src?: string | undefined;
		isSVG?: boolean | undefined;
		customClass?: string | undefined;
		onclick?: void | undefined;
	}

	let {
		src = undefined,
		isSVG = undefined,
		customClass = undefined,
		onclick = undefined
	}: Props = $props();
</script>

{#if isSVG}
	{src}
{/if}

<img {src} alt="" class={customClass} />
