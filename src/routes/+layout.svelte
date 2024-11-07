<script>
	import '../app.css';
	import TopBar from '../components/TopBar.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<TopBar />
{@render children?.()}
