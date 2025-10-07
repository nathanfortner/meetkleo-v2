const facebookPageName = import.meta.env.PUBLIC_FACEBOOK_PAGENAME;
const facebookAuthorPageName = import.meta.env.PUBLIC_FACEBOOK_AUTHOR_PAGE;

const website = {
	author: 'Michiyo Kawasaki',
	ogLanguage: 'en_US',
	siteLanguage: 'en-US',
	siteTitle: 'Kleo',
	siteShortTitle: 'Kleo',
	siteUrl: import.meta.env.PUBLIC_SITE_URL,
	backgroundColor: '#1b4079',
	themeColor: '#d62828',
	contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL,
	facebookAuthorPage: `https://www.facebook.com/${import.meta.env.facebookAuthorPageName}`,
	facebookAuthorPageName,
	facebookPage: `https://www.facebook.com/${import.meta.env.facebookPageName}`,
	facebookPageName,
	githubPage: import.meta.env.PUBLIC_GITHUB_PAGE,
	linkedinProfile: import.meta.env.PUBLIC_LINKEDIN_PROFILE,
	telegramUsername: import.meta.env.PUBLIC_TELEGRAM_USERNAME,
	tiktokUsername: import.meta.env.PUBLIC_TIKTOK_USERNAME,
	twitterUsername: import.meta.env.PUBLIC_TWITTER_USERNAME,
	twitterUserId: import.meta.env.PUBLIC_TWITTER_USER_ID,
	wireUsername: import.meta.env.PUBLIC_WIRE_USERNAME,
};

export { website as default };