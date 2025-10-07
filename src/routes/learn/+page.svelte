
<script>
    import { page } from '$app/stores';
    import { valueLang } from "$lib/utils/stores.js";
    import { contents } from '$lib/utils/stores.js';
    import Contentcard from '$lib/components/contentcard.svelte';
    import Seohead from '$lib/SEO/seohead.svelte';
    
    let klg = $page.url.searchParams.get('klg');

    if (klg === 'German' || klg === 'Italian' || klg === 'Spanish' || klg === 'Ukrainian') {
        $valueLang = klg;
    } else {
        $valueLang = 'Fluent';
    }

    
    
</script>
<svelte:head>
    <title>Kleo | Learn - Free Content</title>
    <meta name="description" content="start learning how to speak a new language with the free avaliable lessons on Kleo - German, Spanish, Italian, Ukranian" />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <link rel="canonical" href={`https://www.meetkleo.com/learn`} />
</svelte:head>
    
    <Contentcard contents={$contents}/>

    
