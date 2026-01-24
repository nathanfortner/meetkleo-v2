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

   // Format date for display (MM/DD/YYYY to readable)
   function formatDateForDisplay(dateStr) {
       if (!dateStr) return '';
       const parts = dateStr.split('/');
       if (parts.length === 3) {
           const months = ['January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'];
           return `${months[parseInt(parts[0]) - 1]} ${parseInt(parts[1])}, ${parts[2]}`;
       }
       return dateStr;
   }

   $: hasUpdate = data.dateModified && data.dateModified !== data.date;
</script>

<Seohead title={data.title} metadescription={data.metadescription} canon={`articles/${seo_fname}`} />
<SchemaArticle
    title={data.title}
    description={data.metadescription}
    author={data.author}
    datePublished={toISODate(data.date)}
    dateModified={toISODate(data.dateModified || data.date)}
    image={data.coverimage}
    url={`articles/${seo_fname}`}
/>

<div class="bg-white rounded-xl">
    {#if data.tldr}
        <div class="mx-auto max-w-3xl px-4 pt-6">
            <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p class="text-sm font-semibold text-purple-800 mb-1">Quick Answer</p>
                <p class="text-gray-700">{data.tldr}</p>
            </div>
        </div>
    {/if}
    {#if hasUpdate}
        <div class="mx-auto max-w-3xl px-4 pt-4">
            <span class="inline-flex items-center gap-1 text-sm text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Last updated: {formatDateForDisplay(data.dateModified)}
            </span>
        </div>
    {/if}
	<svelte:component this={data.content} />
</div>
