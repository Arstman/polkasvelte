<script context="module">
	export async function load({stuff}) {
		return {
			stuff: {...stuff}
		}
	}

</script>
<script>
	import {page} from '$app/stores';
	//import Meta from '$lib/components/share/meta.svelte';
	let str = "waiting..."
	const polka_api = $page.stuff.api;
	export async function get_desposit() {
		console.log(polka_api.consts.balances.existentialDeposit.toNumber());
		const chain = await polka_api.rpc.system.chain();
		await polka_api.rpc.chain.subscribeNewHeads((lastHeader) => {
			console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
			str = `${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`;
		});

		return polka_api.consts.balances.existentialDeposit.toNumber()
	}


	export let deposit =  get_desposit();



</script>

<!--<Meta {...meta}/>-->
{#await deposit then value}
<p class="mt-96 mb-32 px-16 ">
	<!--{JSON.stringify(meta, null, '\t')}-->
	<!--{JSON.stringify(life, null, '\t')}-->
	{value}
</p>
	{/await}
<a href="/app/new">new</a>
<p class="mt-96 mb-32 px-16 ">
	<!--{JSON.stringify(meta, null, '\t')}-->
	<!--{JSON.stringify(life, null, '\t')}-->
	{str}
</p>