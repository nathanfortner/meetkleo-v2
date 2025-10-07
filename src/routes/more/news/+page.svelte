<script>
    import {newsitems} from '$lib/utils/stores.js';

    import Seohead from '$lib/SEO/seohead.svelte';
    
    let title = 'News';
    let metadescription = 'find out the latest content and feature release schedules and all things Kleo';
    
    function convertDate(d) {
      var date = new Date(d);

      var month = date.toLocaleDateString('default', {month: 'long'});
      
      // var day = date.toLocaleDateString('default', {day: 'numeric'});
      var day = date.getUTCDate();

      var monthday = `${month} ${day}`;
      return monthday;
	  }

    function getWeeksDiff() {
      const msInWeek = 1000 * 60 * 60 * 24 * 7;
      const startDate = new Date('2022-07-06');
      const endDate = new Date();
      return Math.round(Math.abs(endDate - startDate) / msInWeek);
    }
    
    let currentWeek = getWeeksDiff()-1;
    
    let show = true;
    function showIt() {
        show = !show;
    }
</script>

<Seohead title={title} metadescription={metadescription} canon={'more/news'} />

<section class="mt-6" id='pages'>
    <div class="bg-gray-50 rounded-xl mx-3">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">        
            <h1 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">News and Updates</h1>
    
            <!-- Full Version -->
            <h2 class="text-center text-2xl sm:text-md font-semibold mt-3 bg-k_yellow/30">JUST LAUNCHED!</h2>
            <h3 class="text-center text-2xl sm:text-md font-semibold mt-1 bg-k_yellow/30">Hands free learning</h3>
            <h4 class="text-center mt-1 max-w-md mx-auto">Grab your headphones, put your phone in your pocket and keep learning. Get the same interctive experience while you cook, clean, workout, or whatever you want to do. Integrate learning into your daily routines and watch your progress soar!</h4>
            <br>
            
            <table class="hidden md:table table-fixed mx-auto w-xl mt-6 border-collapse bg-white shadow-sm rounded-xl">
                <thead class="bg-purple-400">
                    <tr class="text-black text-lg bg-white">
                      <th colspan="3">12 weeks of german release schedule</th>
                    </tr>
                    <tr class="text-white text-xl">
                      <th class="font-bold lg:w-[15%] text-left p-[30px] rounded-tl-xl">DATE</th>
                      <th class="font-bold w-[25%] text-left p-[30px]">CAPABILITY</th>
                      <th class="font-bold w-[40%] text-left p-[30px] rounded-tr-xl">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {#each $newsitems as {id, attributes}, i}
                        <tr>
                            <td class="p-[30px] border-grey-300 border-[1px]">
                              {#if i < currentWeek}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline h-6 w-6 text-green-500 mr-1" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2V172.2z"/><path class="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg>
                                
                              {:else if i == currentWeek}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline h-6 w-6 text-purple-400 mr-1" fill="currentColor"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M265.9 382.8C259.9 380.3 256 374.5 256 368v-64H160c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z"/><path class="fa-secondary" d="M512 256c0-141.4-114.6-256-256-256S0 114.6 0 256c0 141.4 114.6 256 256 256S512 397.4 512 256zM265.9 382.8C259.9 380.3 256 374.5 256 368v-64H160c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z"/></svg>
                              {/if}
                              {convertDate(attributes.newsdate)}
                              
                            </td>
                            <td class="p-[30px] border-grey-300 border-[1px]">
                              {attributes.newstitle}
                              
                            </td>
                            <td class="p-[30px] border-grey-300 border-[1px]">
                              {attributes.newsdescription}
                              
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>


            <!-- Mobile Version -->

            {#each $newsitems as {id, attributes}, i}
            <div class="grid md:hidden grid-cols-2 max-w-md mx-auto mt-4 shadow-xl rounded-xl">
              
              <div class="col-span-2 bg-purple-400 p-3 rounded-t-xl self-center text-center">
                {#if i < currentWeek}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline h-6 w-6 fill-k_green mr-1"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2V172.2z"/><path class="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg>
                {:else if i == currentWeek}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline h-6 w-6 fill-k_red mr-1"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs><path class="fa-primary" d="M265.9 382.8C259.9 380.3 256 374.5 256 368v-64H160c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z"/><path class="fa-secondary" d="M512 256c0-141.4-114.6-256-256-256S0 114.6 0 256c0 141.4 114.6 256 256 256S512 397.4 512 256zM265.9 382.8C259.9 380.3 256 374.5 256 368v-64H160c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z"/></svg>
                {/if}  
                <p class="text-sm sm:text-md text-white text-center inline">{convertDate(attributes.newsdate)}</p>
              </div>
              <div class="p-1 sm:p-2 border-b-2 self-center">
                <p class="font-bold text-xs sm:text-sm text-black text-left">Capability</p>
              </div>
              <div class="p-1 sm:p-2 border-b-2 border-l-2">
                <p class="font-bold text-xs sm:text-sm text-black text-left self-center">Description</p>
              </div>
              <div class="p-1 sm:p-2 text-xs sm:text-sm text-left self-center">
                {attributes.newstitle}
              </div>
              <div class="p-1 sm:p-2 rounded-br-xl border-l-2 text-xs sm:text-sm text-left self-center">
                {attributes.newsdescription}
              </div>
            </div>
          {/each}
        </div>        
    </div>
</section>

