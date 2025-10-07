<script>
  import Checkmark from '$lib/components/checkmark.svelte';
  
  let features =  [
        {
        "title": "Conversational learning",
        "values": [true, true, false]
        },
        {
        "title": "Personalized feedback",
        "values": [true, true, false]
        },
        {
        "title": "Anytime, anywhere practice",
        "values": [true, false, true]
        },
        {
        "title": "Optimized learning using AI",
        "values": [true, false, true]
        },
        {
        "title": "Less than a typical food delivery order",
        "values": [true, false, true]
        }
    ];

</script>

<!-- Start html section -->
<section>
  
    <table class="hidden md:table table-fixed mx-auto w-xl mt-6 border-collapse bg-white shadow-sm rounded-xl">
      <thead class="bg-purple-400">
        <tr class="text-white text-xl">
          <th class="lg:w-[600px] text-left p-[30px] rounded-tl-xl">FEATURE</th>
          <th class="w-[18%] text-center p-[30px]">KLEO</th>
          <th class="w-[18%] text-center p-[30px]">TUTORS</th>
          <th class="w-[18%] text-center p-[30px] rounded-tr-xl">APPS</th>
        </tr>
      </thead>
      <tbody>
        {#each features as feature, i}
          <tr class="">
            <td class="p-[30px] border-grey-300 border-y-[1px] text-xl font-semibold">{feature.title}</td>
            <td class="p-[30px] border-grey-300 border-[1px]">
              <Checkmark checkmark={feature.values[0]} />
            </td>
            <td class="p-[30px] border-grey-300 border-[1px]">
              <Checkmark checkmark={feature.values[1]} />
            </td>
            <td class="p-[30px] border-grey-300 border-y-[1px]">
              <Checkmark checkmark={feature.values[2]} />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  
    {#each features as feature, i}
    <div class="grid md:hidden grid-cols-3 max-w-md mx-auto mt-4 shadow-xl rounded-xl">
      <div class="col-span-3 bg-purple-400 p-3 rounded-t-xl">
        <p class="text-md text-white text-center">{feature.title}</p>
      </div>
      <div class="bg-white p-2 border-b-2">
        <p class="text-base text-black text-center">KLEO</p>
      </div>
      <div class="bg-white p-2 border-b-2 border-l-2">
        <p class="text-base text-black text-center">TUTORS</p>
      </div>
      <div class="bg-white p-2 border-b-2 border-l-2">
        <p class="text-base text-black text-center">APPS</p>
      </div>
      <div class="bg-white p-2 rounded-bl-xl">
        <Checkmark checkmark={feature.values[0]} />
      </div>
      <div class="bg-white p-2 border-l-2">
        <Checkmark checkmark={feature.values[1]} />
      </div>
      <div class="bg-white p-2 rounded-br-xl border-l-2">
        <Checkmark checkmark={feature.values[2]} />
      </div>
    </div>
  {/each}
</section>