<script>
 	import Toppage from '$lib/components/toppage.svelte'; 
	import Tmoan from '$lib/components/tmoan.svelte'; 
	import Howkleo from '$lib/components/howkleo.svelte';
	import Featuretable from '$lib/components/featuretable.svelte';
	import Team from '$lib/components/team.svelte';
	import Testimonbottom from "$lib/components/testimonbottom.svelte";
	import Seohead from '$lib/SEO/seohead.svelte';
    
    let title = 'Language Learning';
    let metadescription = 'unleash the fluent you and start speaking the language using the amazing new interactive video lesson based app Kleo';
</script>

	<Seohead title={title} metadescription={metadescription} />
	<svelte:head>
		<link rel="canonical" href={`https://www.meetkleo.com`} />
	</svelte:head>

	<Toppage />
	<Tmoan />
	<Howkleo />
	<Featuretable />
	<Team />
	<Testimonbottom />