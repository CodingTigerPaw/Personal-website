<script lang="ts">
    import { size } from "../../../const";
    import ButtonAtom from "./atoms/ButtonAtom.svelte";

  interface Props {
    text?: string | undefined;
    buttonSize?: size | undefined;
    isLink?: Boolean| undefined;
    href?: string | undefined;
  }

  let {
    text = undefined,
    buttonSize = undefined,
    isLink = undefined,
    href = undefined
  }: Props = $props();

</script>
 {#if isLink && href}
<a href={href}>
  <ButtonAtom on:click {text} {buttonSize}/>
</a>
 {:else}
    <ButtonAtom on:click {text} {buttonSize}/>
 {/if}

