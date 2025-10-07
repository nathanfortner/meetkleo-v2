<script>
  import { andreaOffer } from '$lib/utils/stores.js';
  let downloadLink = `https://meetkleo.page.link/jNyy1xNvby9tZdsF9`;
  import Seohead from '$lib/SEO/seohead.svelte';
    
  let title = 'Andrea - Simplitalian';
  let metadescription = 'learn Italian with Andrea from Simplitalian. Interactive video lessons with your favorite Italian instagramer';
</script>
<Seohead title={title} metadescription={metadescription} />

<section class="container mx-auto mt-6 text-white" id='andrea'>

  <!-- The perfect lesson -->
  <div class="flex flex-col bg-white/10 mx-2 mb-10 p-2 rounded-xl">  
    <span class="block md:inline-block text-5xl font-medium text-center mb-6 text-white" id="st">Come Stai?</span>
    <span class="block md:inline-block text-5xl font-medium text-center text-white">The Perfect Lesson to Break the Ice</span>
    <div class="container mx-auto mb-5">
      <p id="gradunder" class="text-5xl font-medium text-center">in Italian</p>
  </div>

  <!-- download button -->
      <div class="flex flex-col mx-auto mt-3 mb-5 md:mt-10 md:hidden">
        <a href={downloadLink}>
          <button class="bg-[#FFF563] text-k_darkblue font-bold text-base px-4 py-1 rounded-xl shadow-xl shadow-k_deeppurple">
            
            <span class="block md:inline-block md:text-xl">I Want To Break The Ice</span>
            <span class="md:text-xl">In Italian</span>
      
            <span class="block text-sm md:text-base font-medium">Get it on the iPhone for Free</span>
          </button>
        </a>
      </div>
  <!-- end button -->
      
<!-- instagram image and header -->
    <div class="my-4">
      <img src="https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Andrea/andrea_atf.png" alt="Andrea from his Simplitalian instagram" class="rounded-full w-[150px] float-left mr-4 md:w-[250px] md:mr-8 md:mt-4">
      <p class="text-[16px] md:hidden">Ciao! I love helping people become fluent in this beautiful language and discover our culture.</p>
      <br class="md:hidden">
      <p class="text-[16px] md:hidden">For years, I have been thinking about how to bring the interaction of my 1-on-1 sessions 'offline', so that I could help more and more people learn Italian.</p>
      <br class="md:hidden">
      <p class="text-[16px] md:hidden">That is why I am excited about my collaboration with Kleo. You can practice with the virtual me anytime!</p>

      <p class="hidden md:block md:text-lg md:p-8">Ciao! I love helping people become fluent in this beautiful language and discover our culture.<br><br>
         For years, I have been thinking about how to bring the interaction of my 1-on-1 sessions 'offline', so that I could help more and more people learn Italian.<br><br> That is why I am excited about my collaboration with Kleo. A revolutionary iPhone app where you can practice with the virtual me anytime!</p>
    </div>
  </div>

<!-- download button only on >medium size -->
<div class="hidden md:mb-12 md:justify-center md:flex md:flex-row md:mx-auto">
  <a href={downloadLink}>
    <button class="bg-[#FFF563] text-k_darkblue font-bold text-base px-4 py-1 rounded-xl shadow-xl shadow-k_deeppurple hover:text-slate-700 hover:bg-gradient-to-r from-[#009341] via-white to-[#F32538]">
      <span class="inline-block text-xl text-center">I Want To Break The Ice</span>
      <span class="inline-block text-xl text-center">In Italian</span>
      <span class="block text-base font-medium">Get it on the iPhone for Free</span>
    </button>
  </a>
</div>
<!-- end button -->

  <!-- Practice with Me -->
<div class="md:grid md:grid-cols-2">
    <div class="flex flex-col bg-white/10 mx-2 mb-10 p-2 rounded-xl">
      <h2 class="block text-2xl text-k_yellow font-bold text-center md:text-4xl">Practice With Me</h2>
        <span class="block text-2xl md:inline-block text-center text-k_yellow font-bold md:text-4xl">Ogni Giorno!</span>
        <span class="text-center text-2xl text-k_yellow font-bold md:text-4xl">Build Your Confidence</span>
      <div class="mt-4 flex flex-row">
        <img src="https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Andrea/andrea_0v2.png" alt="andrea asking how's life" class="h-[219px] w-[104px] block-inline mr-8 md:h-[328px] md:w-[156px] md:ml-4">
        <ul class="list-disc text-[16px] md:mx-4">
          <li class="mb-1 md:text-lg md:p-2">Avoid getting stuck in a boring routine with the same introduction</li>
          <li class="mb-1 md:text-lg md:p-2">Italians use lots of different ways to greet each other</li>
          <li class="mb-1 md:text-lg md:p-2">Now you can add these to your conversation starters</li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col bg-white/10 mx-2 mb-10 p-2 rounded-xl">
      <div class="md:flex md:flex-col-reverse md:mx-auto md:flex-auto">
        <img src="https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Andrea/andrea_free3.png" alt="andrea asking is all well" class="h-[219px] w-[104px] float-left md:float-none mr-4 md:h-[328px] md:w-[156px] md:self-center">
        <h3 class="text-2xl text-k_yellow font-bold md:text-center md:text-4xl md:mb-4"><p class="block-inline md:block">Download the Kleo App</p> and Greet Me Now in this Free Interactive Lesson</h3>
      </div>
  
      <!-- download button -->
      <div class="flex flex-col mx-auto mb-3 mt-4 md:hidden">
        <a href={downloadLink}>
          <button class="bg-[#FFF563] text-k_darkblue font-bold text-base px-4 py-1 rounded-xl shadow-xl shadow-k_deeppurple">
            <span class="block md:inline-block text-center">DOWNLOAD THE APP</span>
            <span class="text-[14px] font-medium">Start Speaking Now!</span>
          </button>
        </a>
      </div>
      <!-- end button -->
    </div>
  </div>    
    <!-- download button only on >medium size -->
    <div class="hidden md:mb-12 md:justify-center md:flex md:flex-row md:mx-auto">
      <a href={downloadLink}>
        <button class="bg-[#FFF563] text-k_darkblue font-bold text-base px-4 py-1 rounded-xl shadow-xl shadow-k_deeppurple">
          <span class="block text-xl text-center">DOWNLOAD THE APP</span>
          <span class="text-lg font-medium">Start Speaking Now!</span>
        </button>
      </a>
    </div>
    <!-- end button -->

    


  <!-- Get speaking toolkit -->
  <div class="flex flex-col bg-white/10 mb-10 rounded-xl">
    <span class="block text-2xl text-k_yellow font-semibold text-center md:text-4xl">You'll also Get Access to Other Great Speaking Lessons -</span>
    <span class="block text-2xl text-k_yellow font-semibold text-center mb-2 md:text-4xl">While They Are Free!</span>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
    {#each $andreaOffer as ao}
      <div class="grid grid-cols-10 mt-4 bg-white/10 rounded-xl shadow-sm shadow-k_deeppurple max-w-lg p-3">

        <div class="col-span-4 row-span-3 mx-auto">
            <img src={ao.aoImage} alt={ao.aoAlt} class="object-cover" height="267" width="189">
        </div>

        {#each ao.aoText as atob, indx}
          <div class="col-span-1 self-center mx-auto">
            {#if indx == 0}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-5 md:h-8 fill-current -rotate-45"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"/></svg>
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-5 md:h-8 fill-current"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M360.3 273.6l-112 104C243.8 381.8 237.9 384 232 384c-3.25 0-6.5-.6562-9.594-2C213.7 378.2 208 369.5 208 360v-208c0-9.531 5.656-18.19 14.41-22c8.781-3.75 18.92-2.062 25.92 4.406l112 104C365.2 242.1 368 249.3 368 256S365.2 269 360.3 273.6z"/><path class="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM360.3 273.6l-112 104C243.8 381.8 237.9 384 232 384c-3.25 0-6.5-.6562-9.594-2C213.7 378.2 208 369.5 208 360v-208c0-9.531 5.656-18.19 14.41-22c8.781-3.75 18.92-2.062 25.92 4.406l112 104C365.2 242.1 368 249.3 368 256S365.2 269 360.3 273.6z"/></svg>
            {/if}
          </div>

          <div class="col-span-5 self-center my-1">
            <div class="flex flex-row text-[14px] leading-snug md:text-lg">
              {#if indx == 0}
                  <span class="font-semibold">{atob}</span>
              {:else}
                  <span class="">{atob}</span>
              {/if}
            </div>
          </div>
        {/each}

      </div>
    {/each}
  </div>

  </div>

  <!-- Get speaking toolkit -->
  <div class="flex flex-col bg-white/10 mx-2 mb-10 pt-3 pb-5 rounded-xl md:flex-row md:mx-auto">
    <!-- download button DTUGNIF1 -->
    <!-- download button -->
    <div class="flex flex-col mx-auto mt-3 mb-5 md:mt-10 md:hidden">
      <a href={downloadLink}>
        <button class="bg-[#FFF563] text-k_darkblue font-bold text-base px-4 py-1 rounded-xl shadow-xl shadow-k_deeppurple">
          
          <span class="block md:inline-block md:text-xl">I Want To Break The Ice</span>
          <span class="md:text-xl">In Italian</span>
    
          <span class="block text-sm md:text-base font-medium">Get it on the iPhone for Free</span>
        </button>
      </a>
    </div>
    <!-- end button -->
    <!-- download button only on >medium size -->
    <div class="hidden md:justify-center md:flex md:flex-col md:mx-auto md:my-3">
      <a href={downloadLink}>
        <button class="bg-[#FFF563] text-k_darkblue font-bold text-base px-4 py-1 rounded-xl shadow-xl shadow-k_deeppurple hover:text-slate-700 hover:bg-gradient-to-r from-[#009341] via-white to-[#F32538]">
          <span class="inline-block text-xl text-center">I Want To Break The Ice</span>
          <span class="inline-block text-xl text-center">In Italian</span>
          <span class="block text-base font-medium">Get it on the iPhone for Free</span>
        </button>
      </a>
    </div>
  <!-- end button -->
    <!-- end button -->
  </div>

</section>

<style>
  #st {
    text-decoration: line-through;
    text-decoration-thickness: 5px;
    text-decoration-color: red;
    text-decoration-style: solid;
  }

  #gradunder {
    position: relative;
  }

  #gradunder::before {
    content: "";
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    height: 1px;
    border-radius: 2px;
    background: linear-gradient(111.3deg, #009341, #ffffff, #F32538);
  }
</style>