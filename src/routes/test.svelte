
<script>
	import Meta from '$lib/components/share/meta.svelte';
	export let meta;
	export let life;
</script>

<Meta {...meta}/>

<p class="mt-96 mb-32 px-16 ">
	{JSON.stringify(meta, null, '\t')}
	{JSON.stringify(life, null, '\t')}

</p>