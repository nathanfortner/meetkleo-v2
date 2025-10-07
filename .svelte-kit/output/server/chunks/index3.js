const fetchMarkdownPosts = async () => {
  try {
    const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/articles/posts/k-a-pronunciation-tips.md": () => import("./k-a-pronunciation-tips.js"), "/src/routes/articles/posts/k-ei-and-ie-pronunciation-in-german.md": () => import("./k-ei-and-ie-pronunciation-in-german.js"), "/src/routes/articles/posts/k-ess-tset-pronunciation-and-meaning.md": () => import("./k-ess-tset-pronunciation-and-meaning.js"), "/src/routes/articles/posts/k-german-alphabet-pronunciation.md": () => import("./k-german-alphabet-pronunciation.js"), "/src/routes/articles/posts/k-how-to-maximize-your-learning-in-the-kleo-app.md": () => import("./k-how-to-maximize-your-learning-in-the-kleo-app.js"), "/src/routes/articles/posts/k-how-to-pronounce-ich-in-german.md": () => import("./k-how-to-pronounce-ich-in-german.js"), "/src/routes/articles/posts/k-how-to-pronounce-ig-in-german.md": () => import("./k-how-to-pronounce-ig-in-german.js"), "/src/routes/articles/posts/k-how-to-pronounce-the-german-z.md": () => import("./k-how-to-pronounce-the-german-z.js"), "/src/routes/articles/posts/k-how-to-use-and-pronounce-ich-liebe-dich-to-share-your-love.md": () => import("./k-how-to-use-and-pronounce-ich-liebe-dich-to-share-your-love.js"), "/src/routes/articles/posts/k-how-to-use-danke-and-variations-to-say-thank-you-in-german.md": () => import("./k-how-to-use-danke-and-variations-to-say-thank-you-in-german.js"), "/src/routes/articles/posts/k-i-am-in-german.md": () => import("./k-i-am-in-german.js"), "/src/routes/articles/posts/k-mastering-ch-pronunciation-in-german.md": () => import("./k-mastering-ch-pronunciation-in-german.js"), "/src/routes/articles/posts/k-me-in-german.md": () => import("./k-me-in-german.js"), "/src/routes/articles/posts/k-o-umlaut-made-easy.md": () => import("./k-o-umlaut-made-easy.js"), "/src/routes/articles/posts/k-pronounce-the-german-r-right.md": () => import("./k-pronounce-the-german-r-right.js"), "/src/routes/articles/posts/k-putting-kleo-to-work-for-you-every-time.md": () => import("./k-putting-kleo-to-work-for-you-every-time.js"), "/src/routes/articles/posts/k-u-umlaut-simplified-like-never-before.md": () => import("./k-u-umlaut-simplified-like-never-before.js") });
    const iterablePostFiles = Object.entries(allPostFiles);
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const postPath = path.slice(29, -3);
        return {
          meta: metadata,
          path: postPath
        };
      })
    );
    return allPosts;
  } catch (e) {
    console.log("error loading all the markdown files ", e);
  }
};
export {
  fetchMarkdownPosts as f
};
