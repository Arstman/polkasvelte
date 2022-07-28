import oss from 'ali-oss';
import 'dotenv/config';

const oss_client = new oss({
    region: "oss-cn-hongkong",//process.env.STORAGE_REGION,
    accessKeyId:"LTAI5tCEsCpAQxSovCccDQqz", // process.env.STORAGE_KEY,
    accessKeySecret: "pslq1ETxJpAeJY6eu3umTPMjFMEMgE", //process.env.STORAGE_SECRET,
    bucket:"std-cn" //process.env.BUCKET
});


async function transImage(src, dest) {
    try {
        await oss_client.head(dest);
        console.log("file exited")
    } catch (error) {
        if (error.code === 'NoSuchKey') {
            oss_client.copy(dest, src);   
        }
    }
}

export {
    transImage
}





