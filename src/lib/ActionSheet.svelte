<script>
export let open
const close = () => {
  open = false
}
</script>

<div 
class="fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-300"
class:opacity-0={!open} 
class:pointer-events-none={!open} 
on:click={close}
></div>


<aside 
class="transition-transform z-40 left-1/2 bottom-0 transform -translate-x-1/2 max-w-md w-full overflow-hidden fixed pt-2 px-2 pb-2-safe duration-300"
class:translate-y-full={!open} 
>
    <div class="relative mt-2 first:mt-0 last-child-hairline-b-none" on:click={close}>
        <div
            class="flex items-center w-full px-4 relative z-10 overflow-hidden undefined hairline-b h-14 bg-white dark:bg-neutral-800 text-black text-opacity-55 dark:text-white dark:text-opacity-55 text-sm first:rounded-t-xl last:rounded-b-xl justify-center"
        >
            Do something
        </div>
        <button
            class="flex items-center w-full px-4 relative z-10 overflow-hidden hairline-b h-14 text-primary bg-white dark:bg-neutral-800 active:bg-neutral-200 dark:active:bg-neutral-700 text-xl first:rounded-t-xl last:rounded-b-xl justify-center font-semibold"
        >
            Button 1
        </button>
        <button
            class="flex items-center w-full px-4 relative z-10 overflow-hidden hairline-b h-14 text-primary bg-white dark:bg-neutral-800 active:bg-neutral-200 dark:active:bg-neutral-700 text-xl first:rounded-t-xl last:rounded-b-xl justify-center"
        >
            Button 2
        </button>
        <button
            class="flex items-center w-full px-4 relative z-10 overflow-hidden hairline-b h-14 text-primary bg-white dark:bg-neutral-800 active:bg-neutral-200 dark:active:bg-neutral-700 text-xl first:rounded-t-xl last:rounded-b-xl justify-center"
        >
            Cancel
        </button>
    </div>
</aside>
