<script>
  import Page from '../lib/Page.svelte'
  import ActionSheet from '../lib/ActionSheet.svelte'
import Link from '../lib/Link.svelte'
  let open;
  const toggle = () => {
    open = !open
  }
  let label = "Svelte 2"
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
                <Link href="/settings">
                    <button class="btn btn-blue">
                    Settings
                    </button>
                </Link>
            </div>
        </div>
    </Page>

