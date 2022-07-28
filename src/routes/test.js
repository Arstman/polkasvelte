import {
    getClient
} from '$lib/db/client';
//import 'dotenv/config';
import { transImage } from '/private/image-trans';

export async function GET() {
    const slug = "products";
    const client = await getClient();
    let response;
    try {
        response = await client.items('navigator').readByQuery({
            fields: ['title', 'page_linked.keywords', 'page_linked.description', 'page_linked.og_image.filename_disk', 'page_linked.og_image.filename_download'],
            filter: {
                _and: [{
                    slug: {
                        _eq: slug
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
    let src = response.data[0].page_linked.og_image.filename_disk;
    let dest = response.data[0].page_linked.og_image.filename_download;
    await transImage(src, dest);
    let data = await response.data.map((item) => {
        return {
            title: item.title,
            keywords: item.page_linked.keywords,
            description: item.page_linked.description,
            og_image: item.page_linked.og_image.filename_download,
        }
    })[0];
    console.log(JSON.stringify(data, null, '\t'));
    return {
        status: 200,
        headers: {
            'access-control-allow-origin': '*',
        },
        body: {
            life: data
        }
    };
}