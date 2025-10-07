export const manifest = (() => {
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
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js'))
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
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
