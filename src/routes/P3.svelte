<script>
  import Page from '../lib/Page.svelte'
  import Link from '../lib/Link.svelte'

  let label = "Svelte 3"
</script>



   <Page>
        <div class="container mx-auto px-12 py-12">
   
            <h1 class="text-blue-800 text-4xl">{label}</h1>

            <div class="py-4">
            
            <Link href="/">
                    <button class="btn btn-blue">
                    Start
                    </button>
                </Link>
                <Link href="/data">
                    <button class="btn btn-blue">
                    Data
                    </button>
                </Link>
               
            </div>
        </div>
    </Page>