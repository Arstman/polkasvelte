<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export async function load({fetch}) {
        const res = await fetch('/api/menu');
        return {
            status: res.status,
            props: res.ok && (await res.json())
        };
    }
</script>

<script>
    import Nav from '$lib/components/header/fdmenu.svelte';
    import Footer from '$lib/components/footer/fourcols.svelte';

    export let menu;
</script>

<Nav {menu}/>

<slot/>
<Footer/>