<script>
    import { page } from "$app/stores";

    let menuToggled = false;
    const toggleMenu = () => {
        menuToggled = !menuToggled;
    };

    // List of navigation items
    const navItems = [
        {
            id: "1",
            title: "Posts",
            path: "/",
        },
        {
            id: "2",
            title: "Authors",
            path: "/authors",
        },
    ];
</script>

<header class="py-6 fixed w-full bg-white shadow-lg shadow-purple-200">
    <!-- Container -->
    <div
        class="container flex justify-between items-center mx-auto px-4 md:px-14 lg:px-24 w-full"
    >
        <!-- Logo -->
        <a href="/" class="text-lg flex items-center justify-between space-x-2">
            <img
                src="/favicon.png"
                alt="svelte logo"
                class="h-8 w-8 md:h-12 md:w-12"
            />
            <span class="text-purple-600 font-bold">SvelteKit App</span>
        </a>
        <!-- Logo -->

        <!-- Navigation Menu -->
        <nav>
            <!-- Menu Button -->
            <button class="md:hidden p-2" on:click={toggleMenu}>
                <svg
                    class="h-5 w-5 text-purple-600"
                    viewBox="0 0 26 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                        fill="currentColor"
                    /></svg
                >
            </button>
            <!-- Menu Button -->

            <!-- Navigation Menu Items -->
            <ul
                class:toggle={menuToggled}
                class="bg-white md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-12 md:translate-x-0 md:p-0 fixed left-0 right-0 min-h-screen space-y-10 px-4 py-10 transform translate-x-full transition duration-200"
            >
                {#if navItems}
                    {#each navItems as item}
                        <li
                            class="transition duration-200 hover:text-purple-600 hover:underline hover:underline-offset-2 hover:decoration-2"
                            class:active={$page.path == item.path}
                            on:click={toggleMenu}
                        >
                            <a sveltekit:prefetch href={item.path} class="py-2">
                                <span>{item.title}</span>
                            </a>
                        </li>
                    {/each}
                {/if}
            </ul>
            <!-- Navigation Menu Items -->
        </nav>
        <!-- Navigation Menu -->
    </div>
    <!-- Container -->
</header>

<style>
    .active {
        @apply underline underline-offset-2 decoration-2 text-purple-600 font-semibold;
    }

    .toggle {
        @apply transform translate-x-0;
    }
</style>
