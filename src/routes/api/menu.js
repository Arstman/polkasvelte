import {
    getClient
} from '$lib/db/client';
//import 'dotenv/config';

export async function GET() {
    const client = await getClient();
    let response;
    try {
        response = await client.items('navigator').readByQuery({
            fields: ['children.slug', 'children.title', 'children.children.title', 'children.children.slug'],
            filter: {
                _and: [{
                    is_root: {
                        _eq: true
                    }
                }, {
                    project: {
                        name: {
                            _eq: process.env.PROJECT_NAME
                        }
                    }
                }]
            },
        })
    } catch (error) {
        return {
            status: 404
        }
    }
    let data = await response.data[0].children;
    return {
        status: 200,
        headers: {
            'access-control-allow-origin': '*',
        },
        body: {
            menu: data
        }
    };
}