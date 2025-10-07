
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"utf-8\" />\t\t\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t<link rel=\"icon\" href=\"" + assets + "/images/icons/favicon.ico\" />\n\t<script src=\"https://cdn.usefathom.com/script.js\" data-site=\"ZBNWGBIQ\" defer></script>\n\t<!-- <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n\t<link href=\"https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap\" rel=\"stylesheet\"> -->\n\t<!-- Google Tag Manager -->\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n\tnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n\tj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n\t'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n\t})(window,document,'script','dataLayer','GTM-WT39M4W');</script>\n\t<!-- End Google Tag Manager -->\n\t" + head + "\n</head>\n\t<!-- Google tag (gtag.js) -->\n<!-- <script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-10893239574\"></script>\n\n<script async>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', 'AW-10893239574');\n</script> -->\n\n\t<body class=\"bg-gradient-to-r from-[#6835f8] to-[#aa00ff] overflow-y-scroll\">\n\t\t<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-WT39M4W\"\n\theight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n\t<!-- End Google Tag Manager (noscript) -->\n\t\t<div>" + body + "</div>\n\t\t<!-- fb pixel activate when needed only -->\n\t\t<script>\n\t\t\tsetTimeout(() => {\n\t\t\t  !function(f,b,e,v,n,t,s)\n\t\t\t  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n\t\t\t  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n\t\t\t  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n\t\t\t  n.queue=[];t=b.createElement(e);t.async=!0;\n\t\t\t  t.src=v;s=b.getElementsByTagName(e)[0];\n\t\t\t  s.parentNode.insertBefore(t,s)}(window, document,'script',\n\t\t\t  'https://connect.facebook.net/en_US/fbevents.js');\n\t\t\t  fbq('init', '263833022499325');\n\t\t\t  fbq('track', 'PageView');\n\t\t  }, 3000);\n\t\t  </script> \n\t\t  \t<noscript>\n\t\t\t\t<img height=\"1\" width=\"1\" style=\"display:none\"\n\t\t\t\t\tsrc=\"https://www.facebook.com/tr?id=263833022499325&ev=PageView&noscript=1\"\n\t\t\t\t/>\n\t\t\t</noscript>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "120nqag"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
