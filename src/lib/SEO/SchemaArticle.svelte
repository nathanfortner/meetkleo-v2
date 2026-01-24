<script>
    export let title = '';
    export let description = '';
    export let author = '';
    export let datePublished = '';
    export let image = '';
    export let url = '';

    $: articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": {
            "@type": "Person",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Kleo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.meetkleo.com/images/icons/KLE_Logotype_Monogram_White_RGB.svg"
            }
        },
        "datePublished": datePublished,
        "dateModified": datePublished,
        "image": image ? `https://ddseu0ssi.mo.cloudinary.net/web/images/${image}` : undefined,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.meetkleo.com/${url}`
        }
    };

    // Also add HowTo schema for pronunciation articles
    $: isHowTo = title.toLowerCase().includes('how to') || title.toLowerCase().includes('pronounce');

    $: howToSchema = isHowTo ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": description,
        "step": [
            {
                "@type": "HowToStep",
                "name": "Listen to native pronunciation",
                "text": "Click the purple words to hear how native speakers pronounce the sounds."
            },
            {
                "@type": "HowToStep",
                "name": "Practice speaking",
                "text": "Repeat the sounds out loud, focusing on the specific technique described."
            },
            {
                "@type": "HowToStep",
                "name": "Get feedback in the app",
                "text": "Use the Kleo app for real-time pronunciation feedback."
            }
        ]
    } : null;
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>`}
    {#if howToSchema}
        {@html `<script type="application/ld+json">${JSON.stringify(howToSchema)}</script>`}
    {/if}
</svelte:head>
