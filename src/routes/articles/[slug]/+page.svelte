<script>
   import Seohead from '$lib/SEO/seohead.svelte';
   import SchemaArticle from '$lib/SEO/SchemaArticle.svelte';
   export let data;

   let seo_fname = data.fname.slice(2);

   // Convert date format MM/DD/YYYY to ISO format
   function toISODate(dateStr) {
       if (!dateStr) return '';
       const parts = dateStr.split('/');
       if (parts.length === 3) {
           return `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
       }
       return dateStr;
   }
</script>

<Seohead title={data.title} metadescription={data.metadescription} canon={`articles/${seo_fname}`} />
<SchemaArticle
    title={data.title}
    description={data.metadescription}
    author={data.author}
    datePublished={toISODate(data.date)}
    image={data.coverimage}
    url={`articles/${seo_fname}`}
/>

<div class="bg-white rounded-xl">
	<svelte:component this={data.content} />
</div>