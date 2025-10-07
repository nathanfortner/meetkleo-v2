export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/articles": [3],
		"/articles/[slug]": [4],
		"/components": [5],
		"/downloads": [6],
		"/learn": [7],
		"/learn/andrea": [8],
		"/learn/andrea/order_in_italian": [9],
		"/learn/andrea/say_farewell": [10],
		"/legal": [11],
		"/more": [12],
		"/more/faq": [13],
		"/more/news": [14],
		"/of/german-pronunciation": [15],
		"/of/learn-italian-like-you-are-there": [16],
		"/of/rachellasse": [17],
		"/of/simplitalian": [18],
		"/of/youritalianfriends": [19]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';