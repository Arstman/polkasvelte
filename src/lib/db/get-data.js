import {
    getClient
} from '$lib/db/client';

const client = await getClient();

async function get_from_client(collection, fields, filter) {
    let response;
    try {
        response = await client.items(collection).readByQuery({
            fields,
            filter,
        })
    } catch (error) {
        return {
            status: 404
        }
    }
    return {...response.data, status: 200}
}

export {get_from_client};