import client from './client';


export const OTPApi = async(data) =>{
    const response = await client.post('/verify', data);
    const result = await response;
    return result;
}