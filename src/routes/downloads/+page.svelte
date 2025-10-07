<script>
    import Seohead from '$lib/SEO/seohead.svelte';
      
    let title = 'Download Kleo App';
    let metadescription = 'download Kleo from the apple app store or on the google play store';
</script>

<Seohead title={title} metadescription={metadescription} canon={'downloads'} />

<section class="mt-6" id='downloads'>
    
    <div class="flex flex-col bg-purple-500/40 rounded-xl">
        <div class="text-lg bg-gradient-to-r from-k_deeppurple to-bg-purple-500/40 text-white px-3 rounded-tl-xl max-w-xs">
            <h1>Download Kleo</h1>
        </div>
    </div>

    <div class="flex flex-col md:flex-row mx-auto justify-center md:justify-evenly">

        <div class="flex flex-col bg-white m-5 p-4 rounded-xl shadow-lg shadow-purple-400 md:w-5/12 h-96 relative">            
                <div class="flex flex-col mx-auto justify-center items-center">
                    <a href="https://apps.apple.com/app/id1535893500" rel="external">        
                    <h2 class="text-lg font-bold text-center">Apple Devices</h2>
                    <p class="text-center text-base py-1">Kleo is released on most Apple devices, including iPhone and iPad. Find it on the Apple App Store or click the link below.</p>
                    
                    <img src="./images/icons/AppStore.JPG" alt="Kleo on the Apple App Store" class="object-contain py-7 sm:py-0">
                    
                    <div class="flex justify-center">
                        <img src="https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download to get Kleo on app store" class="w-44 absolute bottom-5">
                    </div>
                    </a>        
                </div>
            
        </div>
        
        <!-- <div class="flex flex-col bg-white m-5 p-4 rounded-xl shadow-lg shadow-purple-400 md:w-5/12 h-96 relative">
            <a href="https://play.google.com/store/apps/details?id=com.wesayhi.app&hl=en_US&gl=US" rel="external">
                    <h2 class="text-lg font-bold text-center">Android Devices</h2>
                    <p class="text-center text-base py-1">We are working hard to bring Kleo to Andriod devices, it is currently in limited time beta for free on the Play store</p>
                    <div class="flex mx-auto max-w-md max-h-64 justify-center">
                        <img src="./images/icons/GooglePlayStoreKleo.jpg" alt="Kleo on the google play store but in beta version now" class="object-contain">
                    </div>
                    <div class="flex justify-center">
                        <img src="https://ddseu0ssi.mo.cloudinary.net/images/other/Web/google-play-badge.png" alt="download to get beta Kleo version on google play store" class="w-64 absolute bottom-1">
                    </div>
            </a>
        </div> -->
        
    </div>
</section>