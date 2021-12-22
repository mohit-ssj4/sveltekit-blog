<script context="module">
    export const load = async ({ page, fetch }) => {
        const id = page.params.id;
        const response = await fetch(`/services/blog/author/${id}.json`);
        const data = await response.json();
        const postsData = data.posts;

        return {
            props: {
                data,
                postsData
            },
        };
    };
</script>

<script>
    export let data;
    export let postsData;
</script>

{#if data}
    <div class="flex flex-col space-y-8">
        <span class="text-3xl font-bold text-purple-600">{data.name}</span>
        <span>{data.company.catchPhrase}</span>
        <span>Email - <span class="text-purple-600">{data.email}</span></span>
        <span class="text-2xl">Posts by {data.name}</span>
        {#if postsData}
            <ul class="flex flex-col space-y-4 list-disc ml-12">
                {#each postsData as post}
                    <li>
                        <a sveltekit:prefetch href="/blog/post/{post.id}" class="font-semibold text-purple-600 underline underline-offset-2 decoration-2">
                            {post.title}
                        </a>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
{/if}
