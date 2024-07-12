import axios from 'axios'

export const brokerEndpoint = process.env.NEXT_PUBLIC_BROKER_ENDPOINT;
export const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

export const services = {
    compiler: `${brokerEndpoint}/compiler`,
    cms: `${brokerEndpoint}/cms/contents`,
}

export const client = axios.create({
    baseURL: brokerEndpoint,
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${apiToken}`
    },
})