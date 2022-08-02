<script context="module">


</script>

<script>
	//import Meta from '$lib/components/share/meta.svelte';
	import { ApiPromise, WsProvider } from '@polkadot/api'
	let str = "waiting..."
	export async function get_desposit() {
		const wsProvider = new WsProvider('wss://rpc.polkadot.io');
		const polka_api = await ApiPromise.create({provider: wsProvider});

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