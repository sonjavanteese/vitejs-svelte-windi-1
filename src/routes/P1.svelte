<script>
  import svelteLogo from '../assets/svelte.svg'
  import Counter from '../lib/Counter.svelte'
  import Page from '../lib/Page.svelte'
  import ActionSheet from '../lib/ActionSheet.svelte'
  import Link from '../lib/Link.svelte'
  let open;
  const toggle = () => {
    open = !open
  }
  let label = "Svelte 1"
</script>



   <Page test>
        <div class="container mx-auto px-12 py-12">
            <header class="flex items-center justify-around">
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" class="logo" alt="Vite Logo" />
                </a>
                <a href="https://svelte.dev" target="_blank" rel="noreferrer">
                    <img src="{svelteLogo}" class="logo svelte" alt="Svelte Logo" />
                </a>
            </header>

            <h1 class="text-blue-800 text-4xl">{label}</h1>
  <div class="py-4">
                <button class="btn btn-red" on:click={toggle}>
                Toggle
                </button>
       
            </div>
            <div class="py-4">
        
              
                <Link href="/data">
                    <button class="btn btn-blue">
                    Data
                    </button>
                </Link>
                <Link href="/settings">
                    <button class="btn btn-blue">
                    Settings
                    </button>
                </Link>
                <Link href="/404">
                    <button class="btn btn-blue">
                    404
                    </button>
                </Link>
            </div>

        </div>
        <ActionSheet bind:open="{open}" />
    </Page>

