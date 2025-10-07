<script>	
   import Seohead from '$lib/SEO/seohead.svelte';
   export let data;
   // console.log(data.fname);
   let seo_fname = data.fname.slice(2);
   
</script>

<Seohead title={data.title} metadescription={data.metadescription} canon={`articles/${seo_fname}`} />

<div class="bg-white rounded-xl">
	<svelte:component this={data.content} />
</div>