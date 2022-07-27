<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/menu');
		return {
			status: res.status,
			stuff: {
				title: 'site title defalt',
				keywords: 'site keywords, a ',
				description: 'site description',
				og_image: 'og image',
				url: 'site url'
			},
			props: res.ok && (await res.json())
		};
	}
</script>

<script>
	import Nav from '$lib/components/header/fdmenu.svelte';
	import Footer from '$lib/components/footer/fourcols.svelte';
	import { page } from '$app/stores';
	let siteName = ' site siteName';
	export let menu;
	console.log(menu);
</script>

<svelte:head>
	<meta name="description" content={$page.stuff.description} />
	<meta name="keywords" content={$page.stuff.keywords} />
	<meta property="og:title" content={$page.stuff.title} />
	<meta property="og:description" content={$page.stuff.description} />
	<meta property="og:url" content={$page.stuff.url} />
	<meta property="og:image" content={$page.stuff.og_image} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<title>{$page.stuff.title}</title>
</svelte:head>
<Nav {menu} />

<slot />
<Footer />
