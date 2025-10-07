<script>

    export let id;
    export let title;
    export let name;
    export let feedback;
    export let profile_image;
    export let isOffer;
</script>

<div id={id} class="max-w-md py-4 px-8 bg-white shadow-lg shadow-[#6835f8]/30 rounded-lg mb-10 mt-10 max-w-96 mx-auto">
    {#if isOffer}
        {#if profile_image === 'none'}
        <div class="flex justify-center md:justify-end -mt-16">
            
        </div>
        {:else}
        <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-[120px] h-[120px] object-cover rounded-full border-2 border-[#6835f8]" src={`https://ddseu0ssi.mo.cloudinary.net/web/images/offers/${profile_image}`} loading="lazy" alt={`${name} photo`}>
        </div>
        {/if}
     {:else}   
     <div class="flex justify-center md:justify-end -mt-16">
        <img class="w-20 h-20 object-cover rounded-full border-2 border-[#6835f8]" src={`https://ddseu0ssi.mo.cloudinary.net/images/other/Web/${profile_image}`} loading="lazy" alt={`${name} photo`}>
    </div>
    {/if}
    
    <div>
        <h2 class="text-gray-800 text-2xl font-semibold">{title}</h2>
        <p class="mt-2 text-gray-600">{feedback}</p>
    </div>
    <div class="flex justify-end mt-4">
        <p class="text-xl font-medium text-[#6835f8]">- {name}</p>
    </div>
</div>