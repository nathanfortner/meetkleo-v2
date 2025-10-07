
<script>
    import Blogposts from '$lib/components/blogposts.svelte';
    export let data;
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
    <!-- BLOG CARDS LOADED  -->
    <div class="flex flex-row flex-wrap gap-6 mx-auto justify-evenly px-1 mt-6">
        {#if data.posts}
            {#each data.posts as bpost}
                <Blogposts blogposts={bpost} />
            {/each}
        {/if}
    </div>
    
</section>






    

    
