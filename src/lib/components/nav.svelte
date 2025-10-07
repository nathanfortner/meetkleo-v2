
<script>
  import {valueLang} from '$lib/utils/stores.js'
    
  let show = true;
  function showIt() {
      show = !show;
  }

  function mobileLogoReset() {
      show = true;
      $valueLang = 'Fluent';
  }

  let downloadButtonText = 'Get Speaking';

      
</script>    

<nav class="bg-gradient-to-r from-[#6835f8] to-[#aa00ff]/20  rounded-b-xl mb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- this div is to control the visibility of the mobile menu button or icon -->
          <div class="-ml-2 mr-2 flex items-center navBreak:hidden">
            <!-- Mobile menu button -->
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" on:click={showIt}>
              <span class="sr-only">Open main menu</span>
              <!--
                Icon when menu is closed. Heroicon name: outline/menu 
                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!--
                Icon when menu is open. Heroicon name: outline/x
                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- this div determins which kleo icon shows up -->
          <div class="flex flex-row items-center mr-1 mt-0.5">
            <a href='/' alt="home">
              <!-- <img src="./images/icons/KLE_Monogram_White_RGB.png" class="md:hidden px-3" height="32px" width="88px" alt="Kleo"  on:click={mobileLogoReset}> -->
              <img src="/images/icons/logo.svg" class="block lg:hidden h-6 w-auto" height="24px" width="78px" alt="Kleo"  on:click={mobileLogoReset}>
              <img src="/images/icons/KLE_Logotype_Monogram_White_RGB.svg" alt="Kleo" height="132px" width="48px" class="hidden lg:block h-12 w-auto"  on:click={() => {$valueLang = 'Fluent'}}>
            </a>
          </div>

          <!-- this div shows the expanded and mobile menu items -->
          <div class="hidden md:ml-6 navBreak:flex md:items-center md:space-x-0 lg:space-x-2 xl:space-x-4">           
                        
            <div class="flex flex-row flex-auto gap-3 xl:gap-6 justify-center items-center text-white rounded-md text-lg xl:text-xl font-bold">
              
              <a href={`/`} class="hover:ring-2 hover:ring-blue-300 hover:ring-offset-4 hover:ring-offset-k_blue-700 rounded-xl p-2" on:click={() => {$valueLang = 'German'}}>
                <div class="flex flex-row justify-center items-center">
                  <div class="grid grid-cols-1 grid-rows-3 w-[35px] h-[20px]"> 
                    <span class="bg-[#000000] basis-1/3"></span>
                      <span class="bg-[#DD0000] basis-1/3"></span>
                      <span class="bg-[#FFCC00] basis-1/3"></span>
                  </div>
                  <!-- <img src="./images/icons/GermanFlag.svg" alt="German Flag" width="36" height="36" class="hover:scale-125 h-9 w-9 rounded-xs"> -->
                  <p class="ml-1 xl:ml-3">German</p>
                </div>
              </a>

            <a href={`/`} class="hover:ring-2 hover:ring-blue-300 hover:ring-offset-4 hover:ring-offset-k_blue-700 rounded-xl p-2" on:click={() => {$valueLang = 'Italian'}}>
              <div class="flex flex-row justify-center items-center">
                <div class="grid grid-cols-3 grid-rows-1 w-[35px] h-[20px]"> 
                  <span class="bg-[#008C45] basis-1/3"></span>
                    <span class="bg-[#F4F9FF] basis-1/3"></span>
                    <span class="bg-[#CD212A] basis-1/3"></span>
                </div>
                <!-- <img src="./images/icons/ItalianFlag.svg" alt="Italian Flag" width="36" height="36" class="hover:scale-125 w-9 h-9 rounded-xs"> -->
                <p class="ml-1 xl:ml-3">Italian</p>
              </div>
            </a>  
              
              <a href={`/`} class="hover:ring-2 hover:ring-blue-300 hover:ring-offset-4 hover:ring-offset-k_blue-700 rounded-xl p-2" on:click={() => {$valueLang = 'Spanish'}}>             
                <div class="flex flex-row justify-center items-center">
                  <!-- <div class="grid grid-cols-3 grid-rows-1 w-[35px] h-[20px]">
                    <span class="bg-[#006341] basis-1/3"></span>
                    <span class="bg-white basis-1/3"></span>
                    <span class="bg-[#C8102E] basis-1/3"></span>
                  </div> -->
                  <div class="container w-[35px] h-[20px]">
                  <img src="https://ddseu0ssi.mo.cloudinary.net/images/other/Web/MexicanFlag.png" alt="Mexican Flag" width="35px" height="20px" class="object-cover">
                </div>
                  <p class="ml-1 xl:ml-3">Spanish</p>
              </div>
            </a>

            <a href={`/learn`} class="hover:ring-2 hover:ring-blue-300 hover:ring-offset-4 hover:ring-offset-k_blue-700 rounded-xl p-2">
              <div class="">
                <p class="">Learn</p>
              </div>
            </a>
            
            <a href={`/articles`} class="hover:ring-2 hover:ring-blue-300 hover:ring-offset-4 hover:ring-offset-k_blue-700 rounded-xl p-2">
              <div class="">
                <p class="">Articles</p>
              </div>
            </a>
            
            <a href={`/more`} class="hover:ring-2 hover:ring-blue-300 hover:ring-offset-4 hover:ring-offset-k_blue-700 rounded-xl p-2">
              <div class="">
                <p class=" ">More</p>
              </div>
            </a>

            </div>

          </div>

        </div>
        <div class="flex items-center ml-1">
          <div class="flex-shrink-0">
            <a href="/downloads">
            <button type="button" class="flex flex-row items-center text-k_purple-600 text-[16px] lg:text-lg py-1 px-2 md:px-5 rounded-xl font-bold bg-k_yellow hover:bg-k_deeppurple hover:text-k_yellow justify-center shadow-md shadow-k_purple-50">
              <!-- Heroicon name: solid/plus-sm -->
              <svg class="inline h-4 text-k_purple-500 mr-2" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
                <span class="">{downloadButtonText}</span>
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="navBreak:hidden" class:hidden={show} id="mobile-menu" on:click={showIt}>
      <div class="px-3 pt-1 pb-1 space-y-1 sm:px-3">

        <a href={`/`} class="text-white px-3 rounded-md" on:click={() => {$valueLang = 'German'}}>
          <div class="flex justify-left items-center">
            
            <p class="pl-3 text-base font-bold">German</p>
          </div>
        </a>
        
        <a href={`/`} class="text-white px-3 rounded-md" on:click={() => {$valueLang = 'Italian'}}>
          <div class="flex justify-left items-center">
            
            <p class="pl-3 text-base font-bold">Italian</p>
          </div>
        </a>   
        
        <a href={`/`} class="text-white rounded-md" on:click={() => {$valueLang = 'Spanish'}}>
          <div class="flex justify-left items-center flex-auto">
            
            <p class="pl-3 text-base font-bold">Spanish</p>
            
          </div>
        </a>

        <a href={`/learn`} class="text-white block px-3 pt-4 rounded-md text-base font-bold">Learn</a>
        
        <a href={`/articles`} class="text-white block px-3 pt-4 rounded-md text-base font-bold">Articles</a>
        
        <a href={`/more`} class="text-white block px-3 pt-4 rounded-md text-base font-bold">More</a>
        
      </div>
    </div>
  </nav>
  