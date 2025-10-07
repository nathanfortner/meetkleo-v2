import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
const Reviewcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { title } = $$props;
  let { name } = $$props;
  let { feedback } = $$props;
  let { profile_image } = $$props;
  let { isOffer } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.feedback === void 0 && $$bindings.feedback && feedback !== void 0)
    $$bindings.feedback(feedback);
  if ($$props.profile_image === void 0 && $$bindings.profile_image && profile_image !== void 0)
    $$bindings.profile_image(profile_image);
  if ($$props.isOffer === void 0 && $$bindings.isOffer && isOffer !== void 0)
    $$bindings.isOffer(isOffer);
  return `<div${add_attribute("id", id, 0)} class="max-w-md py-4 px-8 bg-white shadow-lg shadow-[#6835f8]/30 rounded-lg mb-10 mt-10 max-w-96 mx-auto">${isOffer ? `${profile_image === "none" ? `<div class="flex justify-center md:justify-end -mt-16" data-svelte-h="svelte-zux43h"></div>` : `<div class="flex justify-center md:justify-end -mt-16"><img class="w-[120px] h-[120px] object-cover rounded-full border-2 border-[#6835f8]"${add_attribute("src", `https://ddseu0ssi.mo.cloudinary.net/web/images/offers/${profile_image}`, 0)} loading="lazy"${add_attribute("alt", `${name} photo`, 0)}></div>`}` : `<div class="flex justify-center md:justify-end -mt-16"><img class="w-20 h-20 object-cover rounded-full border-2 border-[#6835f8]"${add_attribute("src", `https://ddseu0ssi.mo.cloudinary.net/images/other/Web/${profile_image}`, 0)} loading="lazy"${add_attribute("alt", `${name} photo`, 0)}></div>`} <div><h2 class="text-gray-800 text-2xl font-semibold">${escape(title)}</h2> <p class="mt-2 text-gray-600">${escape(feedback)}</p></div> <div class="flex justify-end mt-4"><p class="text-xl font-medium text-[#6835f8]">- ${escape(name)}</p></div></div>`;
});
export {
  Reviewcard as R
};
