<script lang="ts">
    import {twMerge} from 'tailwind-merge'
   interface Props {
      dest: string | undefined;
      text?: string | undefined;
      customClass?: string | undefined;
      isLogo?: boolean | undefined;
      isActive?: boolean| undefined;
      isHamburger?: boolean | undefined;
      children?: import('svelte').Snippet;
   }

   let {
      dest,
      text = undefined,
      customClass = undefined,
      isLogo = undefined,
      isActive = undefined,
      isHamburger = undefined,
      children
   }: Props = $props();


   
</script>

<a class={twMerge(isActive ? isHamburger ? 'text-orange-600 underline ': 'bg-orange-600 rounded-lg' : '', isHamburger ? " " : 'hover:bg-orange-600 box-border hover:rounded-lg p-1',isHamburger ? '':'',customClass)} href={dest}>
    {#if isLogo || isHamburger}
    {@render children?.()}
    {:else if text !== undefined}
    {text}
    {/if}
</a>