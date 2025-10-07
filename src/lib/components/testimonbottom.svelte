<script>
    import Carousel from '$lib/components/carousel.svelte';
    import {listOfTestimonialsData} from '$lib/utils/stores.js';

    let testimonialsData = $listOfTestimonialsData;

</script>

<!-- Start html section -->
<section class="mt-6 flex flex-col items-center" id="testimon">
<div class="container bg-white rounded-xl">
    <div class="container flex flex-row mx-auto justify-center">
        <h2 class="text-3xl text-center mx-2 mt-5 mb-6 text-black">- Users and Experts <span class="block sm:inline">Speak -</span></h2>
    </div>

    <Carousel {testimonialsData} />
</div>    
</section>