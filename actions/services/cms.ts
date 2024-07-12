import { client, services } from '../api';

type CreateDocumentPayload = {
    class: string;
    title: string;
    description: string;
    body: string;
    is_public: boolean;
    views: number;
    creator_id: string;
}

export async function createDocument(collection: string, payload: CreateDocumentPayload) {
    try {
        console.log(payload)
        const url = services.cms + "/" + collection
        console.log(url)
        const response = await client.post(url, payload);

        if (response.status === 200 || response.status === 201) {
            console.log('Response:', response.data);
        } else {
            console.error('Unexpected response status:', response.status);
        }
    } catch (err: any) {
        console.error('Error making POST request:', err.message);
    }
}