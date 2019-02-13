import axios from 'axios';
const ENDPOINT = process.env.APP_API_URL;
const PROXY = process.env.APP_PROXY_URL;
const HEADERS = { headers: { "Content-Type": "multipart/form-data" } };

export default async function fetchData() {
    const formData = new FormData();
    formData.set("endpointUrl", ENDPOINT);
    formData.set("cacheTime", "999999");
    return await axios({ 
        method: "post", 
        url: PROXY, 
        data: formData, 
        config: HEADERS 
    });
}