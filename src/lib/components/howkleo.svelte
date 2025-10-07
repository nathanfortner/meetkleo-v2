<script>
  import {valueLang} from '$lib/utils/stores.js';
</script>

<!-- Start html section -->
<section class="mt-6" id='howkleo'>
  <div class="container bg-white rounded-xl pb-4 mx-auto">
      <div class="container flex flex-row mb-5 mx-auto justify-center">
        
        <h2 class="text-3xl text-center mx-2 mt-4 text-black">- How Kleo Gets You Speaking -</h2>
        
        
      </div>

      <div class="flex flex-row flex-wrap flex-auto justify-center mb-4 gap-x-14 gap-y-4 pl-2 pr-2">
        <div class="container max-w-sm rounded-xl">
          <div class="flex justify-center items-center md:h-96 md:w-96">
            <img src={`images/${$valueLang}/${$valueLang}-howto-1.webp`} alt="practice speaking whenever you want" height="384" width="360" class="rounded-xl object-cover">
          </div>
          <div class="flex justify-center items-center">
            <p class="text-black text-left pl-4 pb-4 pr-4">Immersion designed by top language and tech experts. Building your confidence to go out and speak in the real world.</p>
          </div>
        </div>
        <div class="container max-w-sm rounded-xl">
          <div class="flex justify-center items-center md:h-96 md:w-96">
            <img src={`images/${$valueLang}/${$valueLang}-howto-2.webp`} alt="learn like you are there" height="384" width="360" class="rounded-xl object-cover">
          </div>
          <p class="text-black text-left pl-4 pb-4 pr-4">The magic of learning from a person meets the convenience of an app. A friend to practice with anytime, anywhere.</p>
        </div>
      <div class="container max-w-sm rounded-xl">
        <div class="flex justify-center items-center md:h-96 md:w-96">
          <img src={`images/${$valueLang}/${$valueLang}-howto-3.webp`} alt="optimize your learning" height="384" width="360" class="rounded-xl object-cover">
        </div>
        <div class="flex justify-center items-center">
          <p class="text-black text-left pl-4 pb-4 pr-4">Real-time feedback and dynamically created lessons. The entire learning experience evolves just for you, every time.</p>
        </div>
      </div>
      </div>
  </div>
</section>