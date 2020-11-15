import client from './client';

export const RegisterApi = async(data)=> {
    const response = await client.post('/account/signup?type=passenger',data)
    const result = await response;
    return result;
}

