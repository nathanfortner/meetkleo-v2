
<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import Blogposts from '$lib/components/blogposts.svelte';
    export let data;

    // Get language filter from URL query param if present
    $: klg = $page.url.searchParams.get('lang');
    $: currentLang = klg || 'All';

    // Update URL when filter changes
    function setFilter(lang) {
        if (lang === 'All') {
            goto('/articles', { replaceState: true, keepFocus: true });
        } else {
            goto(`/articles?lang=${lang}`, { replaceState: true, keepFocus: true });
        }
    }

    // Filter posts based on selected language
    $: filteredPosts = currentLang === 'All'
        ? data.posts
        : data.posts?.filter(post => post.meta.k_language?.toLowerCase() === currentLang.toLowerCase());

    $: articleCount = filteredPosts?.length || 0;
</script>
<svelte:head>
    <title>Kleo | Articles</title>
    <meta name="description" content="content to help you become fluent and grow your knowledge of the langauge and culture" />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <link rel="canonical" href={`https://www.meetkleo.com/articles`} />
</svelte:head>

<section class="mt-6" id='blog'>

    <div class="flex flex-col-2 justify-between items-center bg-gradient-to-r from-k_deeppurple to-bg-purple-500/40 rounded-xl">
        <div class="text-lg  text-white px-3 rounded-tl-xl max-w-xs">
            <h1>Articles</h1>
        </div>
        <div class="text-lg  text-white px-3 rounded-tl-xl max-w-xs">
            <a href="/rss" class="inline-block rounded-xl border border-transparent focus:outline-none px-3 py-2">RSS</a>
        </div>
    </div>

    <!-- Language Filter -->
    <div class="flex flex-row flex-wrap gap-3 justify-center my-4">
        <button
            class="rounded-xl bg-purple-200 px-3 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none min-w-[80px]"
            class:selected={currentLang === 'All'}
            on:click={() => setFilter('All')}>
            All
        </button>
        <button
            class="rounded-xl bg-purple-200 px-3 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none min-w-[80px]"
            class:selected={currentLang === 'german'}
            on:click={() => setFilter('german')}>
            German
        </button>
        <button
            class="rounded-xl bg-purple-200 px-3 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none min-w-[80px]"
            class:selected={currentLang === 'italian'}
            on:click={() => setFilter('italian')}>
            Italian
        </button>
        <button
            class="rounded-xl bg-purple-200 px-3 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none min-w-[80px]"
            class:selected={currentLang === 'spanish'}
            on:click={() => setFilter('spanish')}>
            Spanish
        </button>
        <button
            class="rounded-xl bg-purple-200 px-3 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none min-w-[80px]"
            class:selected={currentLang === 'ukrainian'}
            on:click={() => setFilter('ukrainian')}>
            Ukrainian
        </button>
    </div>

    <p class="text-center text-white mb-4">{articleCount} article{articleCount !== 1 ? 's' : ''}</p>

    <!-- BLOG CARDS LOADED  -->
    <div class="flex flex-row flex-wrap gap-6 mx-auto justify-evenly px-1 mt-6">
        {#if filteredPosts}
            {#each filteredPosts as bpost}
                <Blogposts blogposts={bpost} />
            {/each}
        {/if}
    </div>

</section>

<style>
    .selected {
        background-color: #640cb6;
        color: white;
    }
</style>






    

    
