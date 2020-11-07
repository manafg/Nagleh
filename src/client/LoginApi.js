import client from './client';


export const LoginApi = async(data) =>{
    const response = await client.post('/login', data);
    const result = await response;
    return result;
}