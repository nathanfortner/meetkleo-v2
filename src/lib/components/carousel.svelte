<script>
    import Reviewcard from '$lib/components/reviewcard.svelte';
    export let testimonialsData;
    export const getItemId = (index, carouselName = 'review') => `${carouselName}-item-${index}`
</script>


<div class="flex flex-row gap-2 flex-wrap mx-auto sm:mt-2">
    {#each testimonialsData as {name, title, profile_image, feedback}, index}         
        <Reviewcard id={getItemId(index)} {title} {profile_image} {feedback} {name}/>
    {/each}
</div>