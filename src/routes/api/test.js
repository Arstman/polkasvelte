
//import 'dotenv/config';
import {transImage} from '/private/image-trans';

import { get_from_client} from "$lib/db/get-data.js";


export async function GET() {
    const slug = "products";
    let response;
    let fields = ['title', 'page_linked.keywords', 'page_linked.description', 'page_linked.og_image.filename_disk', 'page_linked.og_image.filename_download'];
    let collection = 'navigator'
    let filter = {
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
        };
    response = await get_from_client(collection,fields,filter)

    console.log(JSON.stringify(response[0], null, '\t'));
    // Retrieve the chain name
    // const chain = await polka_api.rpc.system.chain();
    // await polka_api.rpc.chain.subscribeNewHeads((lastHeader) => {
    //     console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);
    // });

    return  response

}