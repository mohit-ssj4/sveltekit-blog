<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import { onMount } from "svelte";

    let isPageLoaded = false;
    onMount(() => {
        isPageLoaded = true;
    });
</script>

<div>
    <Header />
    <div class="py-48">
        <div class="container mx-auto px-4 md:px-14 lg:px-24 w-full ">
            <!-- Loader -->
            {#if !isPageLoaded}
                <div
                    class="fixed top-0 left-0 bottom-0 right-0 grid place-items-center z-50 bg-white"
                >
                    <img src="/loader.svg" alt="loader" />
                </div>
            {/if}
            <!-- Loader -->
            <slot />
        </div>
    </div>
</div>
