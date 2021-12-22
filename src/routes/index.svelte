<script context="module">
    export const load = async ({ fetch }) => {
        const response = await fetch("/services/blog/posts.json");
        const posts = await response.json();
        return {
            props: {
                posts,
            },
        };
    };
</script>

<script>
    export let posts;

    // Search algo
    let searchTerm = "";
    $: searchedPosts = posts.filter((post) => {
        return (
            post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
</script>

<svelte:head>
    <title>SvelteKit App - Posts</title>
</svelte:head>

<span class="font-bold text-5xl">Posts</span>

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
            placeholder="Search posts here"
            class="w-full outline-none focus:ring-0 border-0"
        />
    </div>

    {#if searchedPosts}
        <div
            class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
            {#each searchedPosts.reverse() as item}
                <a
                    sveltekit:prefetch
                    href="/blog/post/{item.id}"
                    class="active:transform active:translate-y-3 p-4 flex flex-col space-y-8 rounded-md border-2 cursor-pointer hover:shadow-xl transition duration-200 border-purple-100 shadow-lg shadow-purple-100"
                >
                    <span class="text-xl font-bold capitalize text-purple-600">
                        {item.title.substring(0, 15) + " . . ."}
                    </span>
                    <p>{item.body.substring(0, 80)}</p>
                </a>
            {/each}
        </div>
    {:else}
        <span class="font-semibold text-purple-600 text-3xl"
            >You have no posts to view currently!
        </span>
    {/if}
</div>
