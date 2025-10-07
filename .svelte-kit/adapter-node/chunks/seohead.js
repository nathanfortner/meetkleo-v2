import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const VERTICAL_LINE_ENTITY = "|";
const facebookPageName = {}.PUBLIC_FACEBOOK_PAGENAME;
const facebookAuthorPageName = {}.PUBLIC_FACEBOOK_AUTHOR_PAGE;
const website = {
  author: "Michiyo Kawasaki",
  ogLanguage: "en_US",
  siteLanguage: "en-US",
  siteTitle: "Kleo",
  siteShortTitle: "Kleo",
  siteUrl: {}.PUBLIC_SITE_URL,
  backgroundColor: "#1b4079",
  themeColor: "#d62828",
  contactEmail: {}.PUBLIC_CONTACT_EMAIL,
  facebookAuthorPage: `https://www.facebook.com/${{}.facebookAuthorPageName}`,
  facebookAuthorPageName,
  facebookPage: `https://www.facebook.com/${{}.facebookPageName}`,
  facebookPageName,
  githubPage: {}.PUBLIC_GITHUB_PAGE,
  linkedinProfile: {}.PUBLIC_LINKEDIN_PROFILE,
  telegramUsername: {}.PUBLIC_TELEGRAM_USERNAME,
  tiktokUsername: {}.PUBLIC_TIKTOK_USERNAME,
  twitterUsername: {}.PUBLIC_TWITTER_USERNAME,
  twitterUserId: {}.PUBLIC_TWITTER_USER_ID,
  wireUsername: {}.PUBLIC_WIRE_USERNAME
};
const Seohead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { siteLanguage, siteTitle } = website;
  let { metadescription } = $$props;
  let { title } = $$props;
  let { canon } = $$props;
  const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
  if ($$props.metadescription === void 0 && $$bindings.metadescription && metadescription !== void 0)
    $$bindings.metadescription(metadescription);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.canon === void 0 && $$bindings.canon && canon !== void 0)
    $$bindings.canon(canon);
  return `${$$result.head += `<!-- HEAD_svelte-1baulya_START -->${$$result.title = `<title>${escape(pageTitle)}</title>`, ""}<meta name="description"${add_attribute("content", metadescription, 0)}><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">${canon ? `<link rel="canonical"${add_attribute("href", `https://www.meetkleo.com/${canon}`, 0)}>` : ``}<!-- HEAD_svelte-1baulya_END -->`, ""}`;
});
export {
  Seohead as S
};
