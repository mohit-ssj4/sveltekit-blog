<script context="module">
    export const load = async ({ fetch }) => {
        const response = await fetch("/services/blog/authors.json");
        const authors = await response.json();
        isPageLoaded = true;
        return {
            props: {
                authors,
                isPageLoaded,
            },
        };
    };
</script>

<script>
    export let authors;
    // Search algo
    let searchTerm = "";
    $: searchedAuthors = authors.filter((author) => {
        return author.name
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase());
    });
</script>

<svelte:head>
    <title>SvelteKit App - Authors</title>
</svelte:head>

<span class="font-bold text-5xl">Authors</span>

<div class="flex flex-col space-y-12 mt-12">
    <div class="flex items-center border-b-2 border-purple-600">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        <input
            type="text"
            bind:value={searchTerm}
            placeholder="Search authors here"
            class="w-full outline-none focus:ring-0 border-0"
        />
    </div>
    {#if searchedAuthors}
        <div
            class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
            {#each searchedAuthors as author}
                <a
                    sveltekit:prefetch
                    href="/blog/author/{author.id}"
                    class="p-4 flex flex-col active:transform active:translate-y-3 space-y-8 rounded-md border-2 cursor-pointer hover:shadow-xl transition duration-200 border-purple-100 shadow-lg shadow-purple-100"
                >
                    <span class="text-xl font-bold capitalize text-purple-600">
                        {author.name}
                    </span>
                    <span class="text-sm">{author.email}</span>
                </a>
            {/each}
        </div>
    {/if}
</div>
