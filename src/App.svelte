<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import url from './lib/url';
  import Page from './lib/Page.svelte'
  import P1 from './P1.svelte'
  import AppBar from './lib/AppBar.svelte'
 
</script>


<AppBar />

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

    
  </Page>
</main>
