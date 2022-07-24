<script context="module">
	export function load(){
		return {
			stuff: {
				title: "site title defalt",
				keywords: "site keywords, a ",
				description: "site description",
				ogImage: "og image",
				url: "site url"
			}
		}
	}
</script>
<script>
	import Nav from '$lib/header/mega.svelte';
	import Footer from '$lib/footer/fourcols.svelte';
	import { page } from '$app/stores';
	let siteName = ' site siteName';
</script>

<svelte:head>
	<meta name="description" content={$page.stuff.description} />
	<meta name="keywords" content={$page.stuff.keywords} />
	<meta property="og:title" content={$page.stuff.title} />
	<meta property="og:description" content={$page.stuff.description} />
	<meta property="og:url" content={$page.stuff.url} />
	<meta property="og:image" content={$page.stuff.ogImage} />
	<meta property="og:type" content="website">
	<meta property="og:site_name" content={siteName} />
	<title>{$page.stuff.title}</title>
</svelte:head>
<Nav />

<slot />
<Footer />
