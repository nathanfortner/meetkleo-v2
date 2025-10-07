const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/Fluent/Fluent-demo.png","images/Fluent/Fluent-demo.webp","images/Fluent/Fluent-howto-1.png","images/Fluent/Fluent-howto-1.webp","images/Fluent/Fluent-howto-2.png","images/Fluent/Fluent-howto-2.webp","images/Fluent/Fluent-howto-3.png","images/Fluent/Fluent-howto-3.webp","images/FreeContentImg/H1_721F.jpg","images/FreeContentImg/JAS4_71322F.jpg","images/FreeContentImg/JAS5_71322F.jpg","images/German/German-demo.png","images/German/German-demo.webp","images/German/German-howto-1.png","images/German/German-howto-1.webp","images/German/German-howto-2.png","images/German/German-howto-2.webp","images/German/German-howto-3.png","images/German/German-howto-3.webp","images/Italian/Italian-demo.png","images/Italian/Italian-demo.webp","images/Italian/Italian-howto-1.png","images/Italian/Italian-howto-1.webp","images/Italian/Italian-howto-2.png","images/Italian/Italian-howto-2.webp","images/Italian/Italian-howto-3.png","images/Italian/Italian-howto-3.webp","images/Spanish/Spanish-demo.png","images/Spanish/Spanish-demo.webp","images/Spanish/Spanish-howto-1.png","images/Spanish/Spanish-howto-1.webp","images/Spanish/Spanish-howto-2.png","images/Spanish/Spanish-howto-2.webp","images/Spanish/Spanish-howto-3.png","images/Spanish/Spanish-howto-3.webp","images/icons/AppStore.JPG","images/icons/AppStore.webp","images/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg","images/icons/GermanFlag.svg","images/icons/GooglePlayStoreKleo.jpg","images/icons/GooglePlayStoreKleo.webp","images/icons/ItalianFlag.svg","images/icons/KLE_Logotype_Monogram_White_RGB.svg","images/icons/KLE_Logotype_White_RGB.svg","images/icons/KLE_Monogram_White_RGB.png","images/icons/KLE_Monogram_White_RGB.svg","images/icons/MexicanFlag.png","images/icons/SpainFlag.png","images/icons/SpainFlag.webp","images/icons/SpanishFlag.svg","images/icons/WhyKleo.jpg","images/icons/WhyKleo.svg","images/icons/apple.svg","images/icons/circle-notch-solid.svg","images/icons/favicon.ico","images/icons/flower.svg","images/icons/google-play-badge.png","images/icons/google-play-badge.webp","images/icons/howbox.svg","images/icons/kleo_monogram.png","images/icons/kleo_monogram.webp","images/icons/logo.svg","images/icons/quote_all.svg","images/icons/volume-solid.svg","images/people/LukeWeidner.png","images/people/LukeWeidner.webp","images/people/MichaelBachuri.png","images/people/MichaelBachuri.webp","images/people/MichiyoKawasaki.png","images/people/MichiyoKawasaki.webp","images/people/anonym.jpg","images/people/anonym.webp","images/people/feli.jpg","images/people/feli.webp","images/people/jessie.jpg","images/people/jessie.webp","images/people/kali.jpg","images/people/kali.webp","images/people/peter.jpg","images/people/peter.webp","images/people/shelly.jpg","images/people/shelly.webp","public/Kleo-Privacy.pdf"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".JPG":"image/jpeg",".svg":"image/svg+xml",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.6801b086.js","app":"_app/immutable/entry/app.effc7a35.js","imports":["_app/immutable/entry/start.6801b086.js","_app/immutable/chunks/scheduler.0f3c8cf1.js","_app/immutable/chunks/singletons.3019dc3d.js","_app/immutable/chunks/index.c1d2a79c.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/entry/app.effc7a35.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.0f3c8cf1.js","_app/immutable/chunks/index.3053a2dd.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-09081bce.js')),
			__memo(() => import('./chunks/1-1c634a04.js')),
			__memo(() => import('./chunks/2-b768faea.js')),
			__memo(() => import('./chunks/5-8fdb21f5.js')),
			__memo(() => import('./chunks/6-8ba4b33c.js')),
			__memo(() => import('./chunks/7-601ea86c.js')),
			__memo(() => import('./chunks/8-1c627db9.js')),
			__memo(() => import('./chunks/9-8ca2fc46.js')),
			__memo(() => import('./chunks/10-4a8a4d56.js')),
			__memo(() => import('./chunks/11-eb9a1598.js')),
			__memo(() => import('./chunks/12-98c36ab1.js')),
			__memo(() => import('./chunks/13-980e8150.js')),
			__memo(() => import('./chunks/14-61fada96.js')),
			__memo(() => import('./chunks/15-24517b69.js')),
			__memo(() => import('./chunks/16-9fc90503.js')),
			__memo(() => import('./chunks/17-dc4e7226.js')),
			__memo(() => import('./chunks/18-8ce58ac5.js')),
			__memo(() => import('./chunks/19-d302f7f8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/components",
				pattern: /^\/components\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/downloads",
				pattern: /^\/downloads\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/learn",
				pattern: /^\/learn\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/learn/andrea",
				pattern: /^\/learn\/andrea\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/learn/andrea/order_in_italian",
				pattern: /^\/learn\/andrea\/order_in_italian\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/learn/andrea/say_farewell",
				pattern: /^\/learn\/andrea\/say_farewell\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/legal",
				pattern: /^\/legal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/more",
				pattern: /^\/more\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/more/faq",
				pattern: /^\/more\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/more/news",
				pattern: /^\/more\/news\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/of/german-pronunciation",
				pattern: /^\/of\/german-pronunciation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/of/learn-italian-like-you-are-there",
				pattern: /^\/of\/learn-italian-like-you-are-there\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/of/rachellasse",
				pattern: /^\/of\/rachellasse\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/of/simplitalian",
				pattern: /^\/of\/simplitalian\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/of/youritalianfriends",
				pattern: /^\/of\/youritalianfriends\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9236c492.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/articles","/api/posts","/rss","/articles/how-to-maximize-your-learning-in-the-kleo-app","/articles/putting-kleo-to-work-for-you-every-time","/articles/i-am-in-german","/articles/me-in-german","/articles/pronounce-the-german-r-right","/articles/german-alphabet-pronunciation","/articles/a-pronunciation-tips","/articles/how-to-pronounce-the-german-z","/articles/o-umlaut-made-easy","/articles/ei-and-ie-pronunciation-in-german","/articles/u-umlaut-simplified-like-never-before","/articles/ess-tset-pronunciation-and-meaning","/articles/how-to-use-danke-and-variations-to-say-thank-you-in-german","/articles/how-to-pronounce-ich-in-german","/articles/how-to-pronounce-ig-in-german","/articles/how-to-use-and-pronounce-ich-liebe-dich-to-share-your-love","/articles/mastering-ch-pronunciation-in-german"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
