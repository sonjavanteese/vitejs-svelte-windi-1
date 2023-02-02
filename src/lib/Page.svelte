<script>
import { fade, fly } from 'svelte/transition'
export let op_fade = {duration: 400}
export let op_fly = { x: 300, duration: 1000 }
export let test = false
export let active = true
</script>

<section class:test={test} class:active={active} in:fade={op_fade}>
      <slot />
</section>

<style>
  section {
    --color: #565c64;
    --bg: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    overflow-x: hidden;
    background-color: var(--bg);
    transition: all 400ms ease-in;
    }
  .test {
    border: 1px solid red;
  }
</style>