<script>
  import {link} from 'svelte-spa-router'
  export let href = "/"
</script>
<a href={href} use:link>
  <slot />
</a>