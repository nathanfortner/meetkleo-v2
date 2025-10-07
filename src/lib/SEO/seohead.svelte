<script>
    import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
    import website from '$lib/config/website';
   
    const { siteLanguage, siteTitle } = website;
   
    export let metadescription;
    export let title;
    export let canon;
  
    const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
  </script>
    
<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={metadescription} />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    {#if canon}
      <link rel="canonical" href={`https://www.meetkleo.com/${canon}`} />
    {/if}
	
</svelte:head>