import client from './client';
export const RegisterApi = async(data)=> {
    const response = await client.post('/signup',data)
    const result = await response;
    return result;
}