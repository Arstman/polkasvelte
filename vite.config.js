import { sveltekit } from '@sveltejs/kit/vite';
import { splitVendorChunkPlugin } from 'vite';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), splitVendorChunkPlugin()]
};

export default config;
