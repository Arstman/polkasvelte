async function get_polkadot_api() {

    const {ApiPromise, WsProvider} = window.polkadotApi;
    const wsProvider = new WsProvider("wss://rpc.polkadot.io");
    const polka_api = await ApiPromise.create({provider: wsProvider});
    return polka_api
}
//TODO: make this as global store??
export {get_polkadot_api}