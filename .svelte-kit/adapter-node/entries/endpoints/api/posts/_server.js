import { f as fetchMarkdownPosts } from "../../../../chunks/index3.js";
import { j as json } from "../../../../chunks/index.js";
const GET = async () => {
  try {
    const allPosts = await fetchMarkdownPosts();
    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date);
    });
    return json(sortedPosts);
  } catch (e) {
    console.log("could not fetch the all posts", e);
  }
};
export {
  GET
};
