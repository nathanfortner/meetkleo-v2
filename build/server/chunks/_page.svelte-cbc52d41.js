import { c as create_ssr_component, v as validate_component } from './ssr-fdcc1d70.js';
import { S as Seohead } from './seohead-eca8b992.js';

let title = "More";
let metadescription = "keep track of the latest news or learn more about Kleo on the FAQ page";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seohead, "Seohead").$$render($$result, { title, metadescription, canon: "more" }, {}, {})} <div class="flex flex-col bg-purple-500/40 rounded-xl mb-8" data-svelte-h="svelte-wiilxj"><div class="text-lg bg-gradient-to-r from-k_deeppurple to-bg-purple-500/40 text-white px-3 rounded-tl-xl max-w-xs"><h1>More</h1></div></div> <div class="flex flex-col gap-6 mx-auto items-center sm:mx-auto sm:flex-row sm:flex-auto sm:place-content-evenly" data-svelte-h="svelte-1hcq5yn"><a href="/more/news" class=""><div class="text-purple-100 bg-white/30 w-40 h-40 text-3xl font-bold flex items-center justify-center rounded-xl shadow-lg shadow-k_lightgreen hover:bg-white/60 hover:ring-2 hover:ring-blue-300"><h2>News</h2></div></a> <a href="/more/faq" class=""><div class="text-purple-100 bg-white/30 w-40 h-40 text-3xl font-bold flex items-center justify-center rounded-xl shadow-lg shadow-k_red hover:bg-white/60 hover:ring-2 hover:ring-blue-300"><h2>FAQ</h2></div></a></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cbc52d41.js.map
