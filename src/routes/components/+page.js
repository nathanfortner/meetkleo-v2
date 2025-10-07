//this load function is to catch for old links using the component route

import { error, redirect } from '@sveltejs/kit';

export function load( ) {
    throw redirect(307, '/learn');
}