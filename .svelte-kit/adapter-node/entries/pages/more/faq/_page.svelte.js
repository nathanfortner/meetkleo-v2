import { c as create_ssr_component, a as subscribe, v as validate_component, d as each, e as escape } from "../../../../chunks/ssr.js";
import { f as faqs } from "../../../../chunks/stores.js";
import { S as Seohead } from "../../../../chunks/seohead.js";
let title = "FAQ";
let metadescription = "frequently asked questions regarding language learning with Kleo";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $faqs, $$unsubscribe_faqs;
  $$unsubscribe_faqs = subscribe(faqs, (value) => $faqs = value);
  $$unsubscribe_faqs();
  return `${validate_component(Seohead, "Seohead").$$render(
    $$result,
    {
      title,
      metadescription,
      canon: "more/faq"
    },
    {},
    {}
  )} <section class="mt-6" id="pages"><div class="bg-gray-50 rounded-xl mx-3"><div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"><div class="max-w-3xl mx-auto divide-y-2 divide-gray-200"><h1 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl" data-svelte-h="svelte-1rox6rz">Frequently asked questions</h1> <dl class="mt-6 space-y-6 divide-y divide-gray-200">${each($faqs, (faq, i) => {
    return `<div class="pt-6"><dt class="text-lg"> <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false"><span class="text-xl font-bold text-gray-900">${escape(faq.question)}</span> <span class="ml-6 h-7 flex items-center" data-svelte-h="svelte-n4c2os"></span> </button></dt> <dd class="mt-2 pr-12" id="faq-0"><p class="text-base text-gray-500" data-svelte-h="svelte-1e1kngv"></p> <div><!-- HTML_TAG_START -->${faq.answer}<!-- HTML_TAG_END --> </div></dd> </div>`;
  })}</dl></div></div></div></section>`;
});
export {
  Page as default
};
