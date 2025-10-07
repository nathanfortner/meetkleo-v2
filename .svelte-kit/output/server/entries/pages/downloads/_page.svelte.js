import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as Seohead } from "../../../chunks/seohead.js";
let title = "Download Kleo App";
let metadescription = "download Kleo from the apple app store or on the google play store";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seohead, "Seohead").$$render(
    $$result,
    {
      title,
      metadescription,
      canon: "downloads"
    },
    {},
    {}
  )} <section class="mt-6" id="downloads" data-svelte-h="svelte-8d4imf"><div class="flex flex-col bg-purple-500/40 rounded-xl"><div class="text-lg bg-gradient-to-r from-k_deeppurple to-bg-purple-500/40 text-white px-3 rounded-tl-xl max-w-xs"><h1>Download Kleo</h1></div></div> <div class="flex flex-col md:flex-row mx-auto justify-center md:justify-evenly"><div class="flex flex-col bg-white m-5 p-4 rounded-xl shadow-lg shadow-purple-400 md:w-5/12 h-96 relative"><div class="flex flex-col mx-auto justify-center items-center"><a href="https://apps.apple.com/app/id1535893500" rel="external"><h2 class="text-lg font-bold text-center">Apple Devices</h2> <p class="text-center text-base py-1">Kleo is released on most Apple devices, including iPhone and iPad. Find it on the Apple App Store or click the link below.</p> <img src="./images/icons/AppStore.JPG" alt="Kleo on the Apple App Store" class="object-contain py-7 sm:py-0"> <div class="flex justify-center"><img src="https://ddseu0ssi.mo.cloudinary.net/images/other/Web/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download to get Kleo on app store" class="w-44 absolute bottom-5"></div></a></div></div> </div></section>`;
});
export {
  Page as default
};
