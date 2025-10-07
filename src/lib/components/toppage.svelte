<script>
  import {valueLang} from '$lib/utils/stores.js';

  let deColorFrom = 'from-cyan-600';
  let deColorTo = 'to-[#FDF8B4]';


  let colorFrom = deColorFrom;
  let colorTo = deColorTo;

  $: if ($valueLang === 'German') {
    colorFrom = 'from-yellow-400';
    colorTo = 'to-red-100';
  } else if ($valueLang === 'Italian') {
    colorFrom = 'from-green-500';
    colorTo = 'to-white';
  } else if ($valueLang === 'Spanish') {
    colorFrom = 'from-red-600';
  } else {
    colorFrom = 'from-cyan-600';
  }
</script>

<section>
  <div class="mb-14">
    <p class="mt-3 md:mt-9 mb-2">
      <span class="block text-5xl md:text-6xl font-bold text-center text-white px-4">What if an app and a tutor had a baby?</span> 
      <span class={`block text-6xl font-bold text-center text-white  pt-12 text-transparent md:text-8xl bg-clip-text bg-gradient-to-r ${colorFrom} ${colorTo}`}>
        Meet Kleo
      </span>
    
  </div>

  <div class="flex flex-cols-2 gap-2 mx-auto justify-center items-center p-4">
    
      <img src="./images/icons/WhyKleo.jpg" alt="why use kleo, it gets you speaking, propels your learning, and does not waste your time " height="562px" width="367px" class="md:w-[367px] md:h-[562px] rounded-xl">
    
    <div class="hidden md:block md:w-[640px] md:h-[439px]">
            <img src={`https://ddseu0ssi.mo.cloudinary.net/images/other/Web/${$valueLang}/${$valueLang}-demo.png`} alt="kleo app on the phone" height="439px" width="640px" class="object-cover">  
    </div>
  </div>


</section>