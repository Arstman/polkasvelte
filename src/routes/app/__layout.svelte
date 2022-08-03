<script context="module">
    import {get_polkadot_api} from "$lib/wsclient/polkadot-client.js";
    export async function load({stuff}) {
        const polka_api = await  get_polkadot_api();
        return {
            stuff: {
                api: polka_api
            }
        }
    }
</script>

<slot />