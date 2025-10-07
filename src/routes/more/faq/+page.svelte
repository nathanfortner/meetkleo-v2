<script>
    import {faqs} from '$lib/utils/stores.js';
    import Seohead from '$lib/SEO/seohead.svelte';
    
    let title = 'FAQ';
    let metadescription = 'frequently asked questions regarding language learning with Kleo';

    let show = true;
    
    function showIt() {
        show = !show;
    }

</script>

<Seohead title={title} metadescription={metadescription} canon={'more/faq'} />

<section class="mt-6" id='pages'>
    <div class="bg-gray-50 rounded-xl mx-3">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h1 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h1>
            <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                {#each $faqs as faq, i}
            <div class="pt-6">
                <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span class="text-xl font-bold text-gray-900">{faq.question} </span>
                    <span class="ml-6 h-7 flex items-center">
                    </span>
                </button>
                </dt>
                <dd class="mt-2 pr-12" id="faq-0">
                <p class="text-base text-gray-500">
                    </p>
                    <div>	{@html faq.answer} </div>
                </dd>
            </div>
            {/each}
            <!-- More questions... -->
            </dl>
        </div>
        </div>
    </div>
</section>