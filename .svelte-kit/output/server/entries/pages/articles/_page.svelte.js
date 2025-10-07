import { c as create_ssr_component, b as add_attribute, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
const Blogposts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blogposts } = $$props;
  let imgURL = `https://ddseu0ssi.mo.cloudinary.net/web/images/`;
  if ($$props.blogposts === void 0 && $$bindings.blogposts && blogposts !== void 0)
    $$bindings.blogposts(blogposts);
  return `<div class="relative flex flex-col max-w-[350px] rounded-xl shadow-lg bg-white shadow-slate-600 hover:bg-white/90 hover:ring-2 hover:ring-blue-300 hover:shadow-k_blue-400"><a${add_attribute("href", `./articles/${blogposts.path}`, 0)}><img class="w-full aspect-square rounded-t-xl object-cover"${add_attribute("src", `${imgURL}${blogposts.meta.coverimage}`, 0)}${add_attribute("alt", blogposts.meta.title, 0)}> <div class="px-6 py-4"><div class="font-bold text-3xl mb-2">${escape(blogposts.meta.title)}</div> <p class="font-light text-base text-slate-500 pb-2">${escape(blogposts.meta.longdate)}</p></div> <div class="flex flex-row flex-auto justify-around">${each(blogposts.meta.categories.split(","), (cat) => {
    return `<p class="bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 text-center mb-2">#${escape(cat)}</p>`;
  })}</div></a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-7i1dor_START -->${$$result.title = `<title>Kleo | Articles</title>`, ""}<meta name="description" content="content to help you become fluent and grow your knowledge of the langauge and culture"><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><link rel="canonical"${add_attribute("href", `https://www.meetkleo.com/articles`, 0)}><!-- HEAD_svelte-7i1dor_END -->`, ""} <section class="mt-6" id="blog"><div class="flex flex-col-2 justify-between items-center bg-gradient-to-r from-k_deeppurple to-bg-purple-500/40 rounded-xl" data-svelte-h="svelte-1g8l98z"><div class="text-lg text-white px-3 rounded-tl-xl max-w-xs"><h1>Articles</h1></div> <div class="text-lg text-white px-3 rounded-tl-xl max-w-xs"><a href="/rss" class="inline-block rounded-xl border border-transparent focus:outline-none px-3 py-2">RSS</a></div></div>  <div class="flex flex-row flex-wrap gap-6 mx-auto justify-evenly px-1 mt-6">${data.posts ? `${each(data.posts, (bpost) => {
    return `${validate_component(Blogposts, "Blogposts").$$render($$result, { blogposts: bpost }, {}, {})}`;
  })}` : ``}</div></section>`;
});
export {
  Page as default
};
