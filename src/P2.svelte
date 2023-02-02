<script>
  import Router from "./Router.svelte";
  import P3 from "./P3.svelte";
  import P4 from "./P4.svelte";
  import P1 from "./P1.svelte";
  const routes = {
    "blog/:id": () => P4,
    "blog": () => P4,
    "about": () => P3,
    "/": () => P1
  };
</script>

<Router {routes}/>
