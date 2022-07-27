import {
    getClient
} from '$lib/db/client';
//import 'dotenv/config';

export async function GET() {
    const client = await getClient();
    let response;
    try {
        response = await client.items('navigator').readByQuery({
            fields: ['id', 'children.slug','children.title', 'children.page_linked.description', 'children.page_linked.og_image'],
            filter: {
                is_root: {
                    _eq: true
                }
            },
        })
    } catch (error) {
        return {
            status: 404
        }
    }
    console.log(response);
    return {
        status: 200,
        headers: {
            'access-control-allow-origin': '*',
        },
        body: {
            life: response
        }
    };
}