<script>
    
    export let blogposts;
    let imgURL = `https://ddseu0ssi.mo.cloudinary.net/web/images/`;
    let imgAdj = `?tx=c_fill,g_auto,h_550`;

</script>

<div class="relative flex flex-col max-w-[350px] rounded-xl shadow-lg bg-white shadow-slate-600 hover:bg-white/90 hover:ring-2 hover:ring-blue-300 hover:shadow-k_blue-400">
    <a href={`./articles/${blogposts.path}`}>
        <img class="w-full aspect-square rounded-t-xl object-cover" src={`${imgURL}${blogposts.meta.coverimage}`} alt={blogposts.meta.title}>
        <div class="px-6 py-4">
            <div class="font-bold text-3xl mb-2">
                {blogposts.meta.title}
            </div>
            <p class="font-light text-base text-slate-500 pb-2">{blogposts.meta.longdate}</p>
        </div>
        <div class="flex flex-row flex-auto justify-around">
            {#each blogposts.meta.categories.split(',') as cat}
                <p class="bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 text-center mb-2">#{cat}</p>
            {/each}
        </div>
    </a>
  </div>

    