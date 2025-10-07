import { c as create_ssr_component } from "./ssr.js";
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<article class="max-w-3xl mx-auto">${slots.default ? slots.default({}) : ``}</article>`;
});
const audioelement_svelte_svelte_type_style_lang = "";
export {
  Post as P
};
