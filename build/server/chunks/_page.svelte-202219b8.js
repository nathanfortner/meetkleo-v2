import { c as create_ssr_component, a as subscribe, f as set_store_value, b as add_attribute, v as validate_component, e as escape, d as each, n as null_to_empty } from './ssr-fdcc1d70.js';
import { p as page } from './stores2-56d4857e.js';
import { v as valueLang, c as contents } from './stores-05ea5ba6.js';
import './index2-95f6e5cd.js';

const css = {
  code: ".course.svelte-1jxnkcy{position:absolute;right:0.1rem;bottom:0.3rem;line-height:1.25rem;color:white;background-color:rgb(253, 133, 133, 0.5);border-radius:5px;margin:0.4rem;padding-left:0.5rem;padding-right:0.5rem}.pronunciation.svelte-1jxnkcy{position:absolute;right:0.1rem;bottom:0.3rem;line-height:1.25rem;color:white;background-color:rgba(60, 243, 130, 0.5);border-radius:5px;margin:0.4rem;padding-left:0.5rem;padding-right:0.5rem}.funtopics.svelte-1jxnkcy{position:absolute;right:0.1rem;bottom:0.3rem;line-height:1.25rem;color:white;background-color:rgba(49, 64, 194, 0.5);border-radius:5px;margin:0.4rem;padding-left:0.5rem;padding-right:0.5rem}.newrelease.svelte-1jxnkcy{position:relative;border-width:7px;border-color:rgb(18, 245, 18);border-radius:20px}.selected.svelte-1jxnkcy{background-color:#640cb6;color:white}",
  map: null
};
const Contentcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tileCount;
  let $valueLang, $$unsubscribe_valueLang;
  $$unsubscribe_valueLang = subscribe(valueLang, (value) => $valueLang = value);
  let { contents: contents2 } = $$props;
  let sortedContents = contents2;
  let currentLang = $valueLang == "Fluent" ? "German" : $valueLang;
  if ($$props.contents === void 0 && $$bindings.contents && contents2 !== void 0)
    $$bindings.contents(contents2);
  $$result.css.add(css);
  tileCount = contents2.filter((c) => c.lessonLanguage === currentLang && c.lessonType != "Vocabulary").length;
  $$unsubscribe_valueLang();
  return `<section class="mt-6" id="freecontent"><h1 class="block text-k_yellow text-2xl font-bold mb-3 text-center">${escape(tileCount)} Ways To Unleash <p class="block md:inline">The ${escape(currentLang)} You</p> <p class="block text-white" data-svelte-h="svelte-1dr039z">Easier - Faster - Cooler</p> <p class="block text-white" data-svelte-h="svelte-1a4ohyt">Than You Ever Imagined</p></h1> <div class="flex flex-row flex-wrap flex-auto gap-2 bg-purple-500/40 rounded-xl"><div class="text-lg bg-k_primary text-white px-3 rounded-tl-xl shadow-lg" data-svelte-h="svelte-trgksy"><span>Free Content (for a limited time)</span></div> <div class="container flex-col text-white mx-auto p-3"><div class="flex flex-row flex-wrap gap-4"><button class="${[
    "flex mx-auto rounded-xl bg-purple-200 px-2 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none w-24 place-content-center items-center svelte-1jxnkcy",
    currentLang === "German" ? "selected" : ""
  ].join(" ").trim()}" id="German" data-svelte-h="svelte-19gm386"><p class="text-lg">German</p></button> <button class="${[
    "flex mx-auto rounded-xl bg-purple-200 px-2 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none w-24 place-content-center items-center svelte-1jxnkcy",
    currentLang === "Italian" ? "selected" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-793u0k"><p class="text-lg">Italian</p></button> <button class="${[
    "flex mx-auto rounded-xl bg-purple-200 px-2 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none w-24 place-content-center svelte-1jxnkcy",
    currentLang === "Spanish" ? "selected" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-p8g6pw"><p class="text-lg">Spanish</p></button> <button class="${[
    "flex mx-auto rounded-xl bg-purple-200 px-2 py-1 text-k_deeppurple border-2 border-k_deeppurple shadow-md shadow-k_deeppurple hover:bg-purple-100 hover:shadow-none w-24 place-content-center svelte-1jxnkcy",
    currentLang === "Ukrainian" ? "selected" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1hr1p0y"><p class="text-lg">Ukrainian</p></button></div></div> ${each(sortedContents, ({ lessonNumber, lessonID, lessonType, lessonTitle, lessonSet, lessonSetStart, lessonSetEnd, lessonDescription, lessonImage, lessonLink, lessonLock, lessonLanguage, lessonTag, newrelease, teacher }, i) => {
    return `${lessonType != "Vocabulary" && (currentLang == "Fluent" || currentLang == lessonLanguage) ? ` <div class="${[
      "relative flex flex-row rounded-xl mx-auto my-3 max-w-sm max-h-[200px] min-h-[220px] sm:min-h-[100px] bg-white border-0 shadow-lg shadow-k_deeppurple svelte-1jxnkcy",
      newrelease ? "newrelease" : ""
    ].join(" ").trim()}">${newrelease ? `<p class="absolute -top-7 left-2 px-2 bg-[#12f512] text-k_primary rounded-t-lg" data-svelte-h="svelte-1iarzdb">New</p>` : ``}  ${currentLang === "Italian" && teacher === "Andrea" ? `<a href="/learn/andrea/order_in_italian" class="absolute -top-7 right-2 px-2 bg-[#12f512] text-k_primary rounded-t-lg" data-svelte-h="svelte-1pyaith">#Learn More About Me!</a>` : ``}  <div class="container flex"${add_attribute("id", lessonTag, 0)}><div class="relative flex container place-content-center p-1">${i < 3 ? `<img${add_attribute("src", lessonImage, 0)} class="object-cover aspect-square rounded-xl" height="184px" width="184px"${add_attribute("alt", `Lesson ${lessonNumber}`, 0)}>` : `<img${add_attribute("src", lessonImage, 0)} class="object-cover aspect-square rounded-xl" height="184px" width="184px"${add_attribute("alt", `Lesson ${lessonNumber}`, 0)} loading="lazy">`} <p class="absolute left-3 top-1 text-sm text-gray-200 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="fill-current w-3 h-3 mr-2"><path d="M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"></path></svg> ${escape(lessonLock)}</p> <p class="${escape(null_to_empty(lessonTag), true) + " svelte-1jxnkcy"}">#${escape(lessonTag)}</p> </div></div>  <div class="container flex-col relative bg-gradient-to-l from-purple-200 to-k_offwhite rounded-tr-xl rounded-br-xl"><p class="text-black text-lg sm:text-md sm:font-semibold text-center rounded-tr-xl px-1">${escape(lessonTitle)}</p> <p class="text-[12px] md:text-[14px] text-black mx-1 mt-1 px-1">${escape(lessonDescription)}</p>  <div class="flex flex-row absolute bottom-1 right-4 sm:right-9 bg-k_blue-600 rounded-xl h-7 w-28 mx-auto place-content-center border-0 shadow-blue-800 shadow-sm"><a${add_attribute("href", lessonLink, 0)} rel="external"><p class="text-white text-xs inline" data-svelte-h="svelte-1uh993e">Try it in Kleo</p>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="fill-indigo-300 h-5 pl-1 inline"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg></a> </div></div> </div>` : ``}`;
  })}</div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $valueLang, $$unsubscribe_valueLang;
  let $page, $$unsubscribe_page;
  let $contents, $$unsubscribe_contents;
  $$unsubscribe_valueLang = subscribe(valueLang, (value) => $valueLang = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_contents = subscribe(contents, (value) => $contents = value);
  let klg = $page.url.searchParams.get("klg");
  if (klg === "German" || klg === "Italian" || klg === "Spanish" || klg === "Ukrainian") {
    set_store_value(valueLang, $valueLang = klg, $valueLang);
  } else {
    set_store_value(valueLang, $valueLang = "Fluent", $valueLang);
  }
  $$unsubscribe_valueLang();
  $$unsubscribe_page();
  $$unsubscribe_contents();
  return `${$$result.head += `<!-- HEAD_svelte-x6l49b_START -->${$$result.title = `<title>Kleo | Learn - Free Content</title>`, ""}<meta name="description" content="start learning how to speak a new language with the free avaliable lessons on Kleo - German, Spanish, Italian, Ukranian"><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><link rel="canonical"${add_attribute("href", `https://www.meetkleo.com/learn`, 0)}><!-- HEAD_svelte-x6l49b_END -->`, ""} ${validate_component(Contentcard, "Contentcard").$$render($$result, { contents: $contents }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-202219b8.js.map
