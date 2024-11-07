<script lang="ts">
    import { createBubbler } from 'svelte/legacy';

    const bubble = createBubbler();
    import { twMerge } from "tailwind-merge";
    import { size } from "../../../../const";
    interface Props {
        text: string | undefined;
        buttonSize?: size | undefined;
    }

    let { text, buttonSize = undefined }: Props = $props();

    const setSize = (buttonSize: size| undefined): string | undefined =>{
        if(buttonSize !== undefined){
            if(buttonSize === size.sm) return 'p-1'
            if(buttonSize === size.md) return 'p-2 text-md'
            if(buttonSize === size.xl) return 'p-3 text-xl'
        }
        return 'p-1'

    }
</script>
<button onclick={bubble('click')} class={twMerge( setSize(buttonSize), 'rounded-lg bg-orange-500 hover:text-white')}>
    {text}
</button>