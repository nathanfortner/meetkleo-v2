<script>
  import {members} from '$lib/utils/stores.js';
  import Membercard from './membercard.svelte';
</script>

<!-- Start html section -->
<section class="mt-6 bg-white rounded-xl" id="aboutkleo">
    <!-- title container -->
  <div class="container bg-white rounded-xl mx-auto justify-center pt-5">
        <h1 class="text-3xl text-center text-black">- Building Kleo -</h1>   
  </div>

  <!-- Mission container -->
  <div class="container mx-auto">
    <div class="flex flex-col bg-gradient-to-r from-[#6835f8] to-[#aa00ff] rounded-xl justify-center w-xl px-1 py-4 sm:p-10 m-5">
            <h3 class="text-xl text-center text-white font-bold border-b-[1px] w-48 mx-auto leading-1 pb-1">Our Mission</h3>
            <p class="text-white text-left sm:text-center w-[80%] mx-auto">We aim to cultivate connection through learning and conversation. Let’s get talking to each other. Kleo is the new way to learn languages. Your personal coach you can practice speaking with anytime and receive instant, personalized feedback. Without judgments or limits, Kleo gets you ready to speak in the real world.</p>
    </div>
  </div>
  <!-- card holder -->
  <div class="container flex flex-col sm:flex-row flex-wrap flex-auto gap-2 justify-evenly mx-auto">
    {#each $members as member}  
      <Membercard {member} />
    {/each}
  </div>
  
  
  
</section>