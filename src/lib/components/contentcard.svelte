<script>
  import { valueLang } from "$lib/utils/stores.js";

  export let contents;
  

  let vocabcolor = [`#ff3e00`,`#85ed99`,`#3cd666`,`#fff563`,`#f98958`,`#fa5761`,`#050d29`,`#5f1970`,`#aa00ff`,`#6835f8`,`#ff787b`,`#f6dfc5`];
  let sortedContents = contents;
  let currentLang = $valueLang == 'Fluent' ? 'German' : $valueLang;

  function setValueLang() {
    $valueLang = 'Italian'
  }
  
  $: tileCount = contents.filter(c => ((c.lessonLanguage === currentLang) && (c.lessonType != 'Vocabulary'))).length;

</script>

<section class="mt-6" id='freecontent'>
  <h1 class="block text-k_yellow text-2xl font-bold mb-3 text-center"> 
     {tileCount} Ways To Unleash <span class="block md:inline"> The {currentLang} You </span>
    <p class="block text-white">Easier - Faster - Cooler</p>
    <p class="block text-white">Than You Ever Imagined</p>
    
  </h1>

<div class="flex flex-row flex-wrap flex-auto gap-2 bg-purple-500/40 rounded-xl">
  <div class="text-lg bg-k_primary text-white px-3 rounded-tl-xl shadow-lg">
    <span>Free Content (for a limited time)</span>
  </div>
  
  <div class="container flex-col text-white mx-auto p-3">
    
    
    <div class="flex flex-row flex-wrap gap-4">
      <button class="flex mx-auto rounded-xl bg-purple-200 px-2 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none w-24 place-content-center items-center" on:click={() => {currentLang = 'German'; $valueLang = 'German'}} id='German' class:selected="{currentLang === 'German'}">
        <p class="text-lg">German</p>
      </button>
      <button class="flex mx-auto rounded-xl bg-purple-200 px-2 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none w-24 place-content-center items-center" on:click={() => {currentLang = 'Italian'; $valueLang = 'Italian'}} class:selected="{currentLang === 'Italian'}">
<p class="text-lg">Italian</p>
      </button>

      <button class="flex mx-auto rounded-xl bg-purple-200 px-2 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none w-24 place-content-center" on:click={() => {currentLang = 'Spanish'; $valueLang = 'Spanish'}} class:selected="{currentLang === 'Spanish'}">
        <p class="text-lg">Spanish</p>
      </button>

      <button class="flex mx-auto rounded-xl bg-purple-200 px-2 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none w-24 place-content-center" on:click={() => {currentLang = 'Ukrainian'; $valueLang = 'Ukrainian'}} class:selected="{currentLang === 'Ukrainian'}">
        <p class="text-lg">Ukrainian</p>
      </button>
    </div>
    
  </div>

  {#each sortedContents as {lessonNumber, lessonID, lessonType, lessonTitle, lessonSet, lessonSetStart, lessonSetEnd, lessonDescription, lessonImage, lessonLink, lessonLock, lessonLanguage, lessonTag, newrelease, teacher}, i}
  {#if lessonType != 'Vocabulary' && (currentLang == 'Fluent' || currentLang == lessonLanguage) }

  <!-- start main flexbox for card -->
    <div class="relative flex flex-row rounded-xl mx-auto my-3 max-w-sm max-h-[200px] min-h-[220px] sm:min-h-[100px] bg-white border-0 shadow-lg shadow-k_deeppurple" class:newrelease>
      
      {#if newrelease}
        <p class="absolute -top-7 left-2 px-2 bg-[#12f512] text-k_primary rounded-t-lg">New</p>
      {/if}

      <!-- Andrea Section -->
      {#if (currentLang === 'Italian' && teacher === 'Andrea')}
      <a href='/learn/andrea/order_in_italian' class="absolute -top-7 right-2 px-2 bg-[#12f512] text-k_primary rounded-t-lg">#Learn More About Me!</a>
      {/if}

      <!-- left side picture, lock free, and course -->
        <div class="container flex" id={lessonTag}>
          <div class="relative flex container place-content-center p-1">
            {#if i < 3}
              <img src={lessonImage} class="object-cover aspect-square rounded-xl" height="184px" width="184px" alt={`Lesson ${lessonNumber}`}>
            {:else}
              <img src={lessonImage} class="object-cover aspect-square rounded-xl" height="184px" width="184px" alt={`Lesson ${lessonNumber}`} loading="lazy">
            {/if}
            <p class="absolute left-3 top-1 text-sm text-gray-200 flex items-center">
              <!-- this is the lock icon -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="fill-current w-3 h-3 mr-2"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"/></svg>
              {lessonLock}
            </p>

            <p class={lessonTag}>
              #{lessonTag}
            </p>
          </div>
        </div>

        <!-- right side title, description, try it -->
        <div class="container flex-col relative  bg-gradient-to-l from-purple-200 to-k_offwhite rounded-tr-xl rounded-br-xl">
          <p class="text-black text-lg sm:text-md sm:font-semibold text-center rounded-tr-xl px-1">{lessonTitle}</p>   
            <p class="text-[12px] md:text-[14px] text-black mx-1 mt-1 px-1">{lessonDescription}</p>
            <!-- try it in kleo button -->
              <div class="flex flex-row absolute bottom-1 right-4 sm:right-9 bg-k_blue-600 rounded-xl h-7 w-28 mx-auto place-content-center border-0 shadow-blue-800 shadow-sm">
                <a href={lessonLink}>
                  <p class="text-white text-xs inline">Try it in Kleo</p>
                  <!-- this is the apple icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="fill-indigo-300 h-5 pl-1 inline"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>                
                </a>
              </div>
        </div>
      
    </div>
  
    {/if}
  {/each}

</div>
</section>

<style>
  .course {
    position: absolute;
    right: 0.1rem;
    bottom: 0.3rem;
    line-height: 1.25rem;
    color: white;
    background-color: rgb(253, 133, 133, 0.5);
    border-radius: 5px;
    margin: 0.4rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .pronunciation {
    position: absolute;
    right: 0.1rem;
    bottom: 0.3rem;
    line-height: 1.25rem;
    color: white;
    background-color: rgba(60, 243, 130, 0.5);
    border-radius: 5px;
    margin: 0.4rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .funtopics {
    position: absolute;
    right: 0.1rem;
    bottom: 0.3rem;
    line-height: 1.25rem;
    color: white;
    background-color: rgba(49, 64, 194, 0.5);
    border-radius: 5px;
    margin: 0.4rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .newrelease {
    position: relative;
    border-width: 7px;
    border-color: rgb(18, 245, 18);
    border-radius: 20px;
  }

  .selected {
    background-color: #640cb6;
    color: white;
  }
</style>