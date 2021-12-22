<script context="module">
    export const load = async ({ page, fetch }) => {
        const id = page.params.id;
        const response = await fetch(`/services/blog/post/${id}.json`);
        const data = await response.json();
        const authorData = data.user;

        return {
            props: {
                data,
                authorData,
            },
        };
    };
</script>

<script>
    export let data;
    export let authorData;
</script>

{#if data}
    <div class="flex flex-col space-y-12">
        <span class="text-2xl font-bold capitalize text-purple-600"
            >{data.title}</span
        >
        <p>{data.body}</p>
        <p>
            - Written By 
            <a
                sveltekit:prefetch
                href="/blog/author/{authorData.id}"
                class="transition duration-200 underline underline-offset-2 decoration-2 text-purple-600 font-semibold"
            >
                <span>{authorData.name}</span>
            </a>
        </p>
    </div>
{/if}
