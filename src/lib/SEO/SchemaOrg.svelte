<script>
    // Organization and WebSite schema for site-wide use
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kleo",
        "legalName": "We Say Hi, Inc.",
        "url": "https://www.meetkleo.com",
        "logo": "https://www.meetkleo.com/images/icons/KLE_Logotype_Monogram_White_RGB.svg",
        "description": "Kleo is an interactive language learning app that combines video lessons with AI-powered speech recognition to help users become fluent speakers.",
        "foundingDate": "2019",
        "email": "support@meetkleo.com",
        "sameAs": [
            "https://www.facebook.com/TalkWithKleo",
            "https://www.instagram.com/kleolearn/",
            "https://twitter.com/KleoLearn",
            "https://www.tiktok.com/@meetkleo",
            "https://github.com/WeSayHi"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "support@meetkleo.com",
            "contactType": "customer support"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kleo",
        "url": "https://www.meetkleo.com",
        "description": "Learn German, Italian, and Spanish through interactive video conversations with native speakers.",
        "publisher": {
            "@type": "Organization",
            "name": "We Say Hi, Inc."
        }
    };

    const softwareAppSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Kleo",
        "operatingSystem": "iOS",
        "applicationCategory": "EducationApplication",
        "description": "Interactive language learning app with video lessons and AI speech recognition",
        "offers": [
            {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free tier with limited lessons"
            },
            {
                "@type": "Offer",
                "price": "9.99",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "description": "Monthly subscription"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "500"
        },
        "downloadUrl": "https://apps.apple.com/app/id1535893500"
    };
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
    {@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
    {@html `<script type="application/ld+json">${JSON.stringify(softwareAppSchema)}</script>`}
</svelte:head>
