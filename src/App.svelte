<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import url from './lib/url';
  import Page from './lib/Page.svelte'
  import P2 from './P2.svelte'
  import AppBar from './lib/AppBar.svelte'
  import ActionSheet from './lib/ActionSheet.svelte'
  let open;
  const toggle = () => {
    open = !open
  }
</script>


<AppBar {toggle} />

<main>

  <Page test>
        <div class="container mx-auto px-12 py-12">
        <header class="flex items-center justify-around">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                <img src="/vite.svg" class="logo" alt="Vite Logo" />
            </a>
            <a href="https://svelte.dev" target="_blank" rel="noreferrer">
                <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
            </a>
        </header>

        <h1 class="text-blue-800 text-4xl">Vite + Svelte 1</h1>

        <div class="py-4">
            <Counter />
        </div>

    </div>
<ActionSheet bind:open={open}/>
    
  </Page>
</main>
