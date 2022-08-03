<script>
	//import Meta from '$lib/components/share/meta.svelte';
	import {get_polkadot_api} from "$lib/wsclient/polkadot-client.js";
	let str = "waiting..."
	export async function get_desposit() {

		const polka_api = await get_polkadot_api();
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

<p class="mt-96 mb-32 px-16 ">
	<!--{JSON.stringify(meta, null, '\t')}-->
	<!--{JSON.stringify(life, null, '\t')}-->
	{str}
</p>