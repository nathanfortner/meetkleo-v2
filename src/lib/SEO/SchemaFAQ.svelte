<script>
    export let faqs = [];

    // Build FAQPage schema from FAQ data
    $: faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/<[^>]*>/g, '') // Strip HTML tags for schema
            }
        }))
    };
</script>

<svelte:head>
    {#if faqs.length > 0}
        {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
    {/if}
</svelte:head>
