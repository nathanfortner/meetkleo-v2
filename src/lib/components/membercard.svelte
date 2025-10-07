<script>
    export let member;
</script>

<!-- member card -->
<div class="container flex flex-col sm:flex-row flex-auto mx-auto max-w-lg items-center sm:items-start mt-5 mb-5 border-0 shadow-lg rounded-xl">
    <div class="flex flex-col w-[20%] min-w-[110px] p-2 place-content-center items-center">
        <img src={`https://ddseu0ssi.mo.cloudinary.net/images/other/Web/${member.photo}`} loading="lazy" class="rounded-full border-2 border-[#6835f8]" height="75px" width="75px" alt={`Photo of ${member.name}`}>
        <p class="font-bold text-lg leading-5 text-center">{member.name}</p>
        <p class="leading-1 text-center">{member.title}</p>
    </div>
    
    <div class="container flex flex-col sm:flex-row w-full p-2">
        <div class="border-2 border-[#6835f8] mb-4 sm:mr-4 w-1/2 sm:w-1 sm:h-[100px] self-center"></div>
        <p class="leading-1 text-base text-opacity-20 px-8 sm:px-2 sm:text-left">{member.bio}</p>
    </div>   
</div>
