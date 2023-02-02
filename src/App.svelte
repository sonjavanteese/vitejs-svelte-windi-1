<script>
  import P1 from './routes/P1.svelte'
  import P4 from './routes/P4.svelte'
  import P3 from './routes/P3.svelte'
  import AppBar from './lib/AppBar.svelte'
  import Router from 'svelte-spa-router'
  import routes from './routes/routes'
</script>


<AppBar />
<main>
    <Router {routes}/>
</main>
