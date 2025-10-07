import { r as redirect } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const prerender = true;
async function load({ params }) {
  try {
    const Thing = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../posts/k-a-pronunciation-tips.md": () => import("../../../../chunks/k-a-pronunciation-tips.js"), "../posts/k-ei-and-ie-pronunciation-in-german.md": () => import("../../../../chunks/k-ei-and-ie-pronunciation-in-german.js"), "../posts/k-ess-tset-pronunciation-and-meaning.md": () => import("../../../../chunks/k-ess-tset-pronunciation-and-meaning.js"), "../posts/k-german-alphabet-pronunciation.md": () => import("../../../../chunks/k-german-alphabet-pronunciation.js"), "../posts/k-how-to-maximize-your-learning-in-the-kleo-app.md": () => import("../../../../chunks/k-how-to-maximize-your-learning-in-the-kleo-app.js"), "../posts/k-how-to-pronounce-ich-in-german.md": () => import("../../../../chunks/k-how-to-pronounce-ich-in-german.js"), "../posts/k-how-to-pronounce-ig-in-german.md": () => import("../../../../chunks/k-how-to-pronounce-ig-in-german.js"), "../posts/k-how-to-pronounce-the-german-z.md": () => import("../../../../chunks/k-how-to-pronounce-the-german-z.js"), "../posts/k-how-to-use-and-pronounce-ich-liebe-dich-to-share-your-love.md": () => import("../../../../chunks/k-how-to-use-and-pronounce-ich-liebe-dich-to-share-your-love.js"), "../posts/k-how-to-use-danke-and-variations-to-say-thank-you-in-german.md": () => import("../../../../chunks/k-how-to-use-danke-and-variations-to-say-thank-you-in-german.js"), "../posts/k-i-am-in-german.md": () => import("../../../../chunks/k-i-am-in-german.js"), "../posts/k-mastering-ch-pronunciation-in-german.md": () => import("../../../../chunks/k-mastering-ch-pronunciation-in-german.js"), "../posts/k-me-in-german.md": () => import("../../../../chunks/k-me-in-german.js"), "../posts/k-o-umlaut-made-easy.md": () => import("../../../../chunks/k-o-umlaut-made-easy.js"), "../posts/k-pronounce-the-german-r-right.md": () => import("../../../../chunks/k-pronounce-the-german-r-right.js"), "../posts/k-putting-kleo-to-work-for-you-every-time.md": () => import("../../../../chunks/k-putting-kleo-to-work-for-you-every-time.js"), "../posts/k-u-umlaut-simplified-like-never-before.md": () => import("../../../../chunks/k-u-umlaut-simplified-like-never-before.js") }), `../posts/k-${params.slug}.md`);
    const { seotitle, title, author, date, longdate, metadescription, fname } = Thing.metadata;
    const content = Thing.default;
    return {
      title,
      seotitle,
      author,
      date,
      longdate,
      metadescription,
      fname,
      content
    };
  } catch (error) {
    console.log("could not find the requested blog page", error);
    throw redirect(307, "/learn");
  }
}
export {
  load,
  prerender
};
