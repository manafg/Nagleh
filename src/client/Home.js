import client from './client';


export const requestFareApi = async(data) =>{
    const response = await client.get(`requests/truck/fare?current=${data.wherelatitude},${data.wherelongitude}&size=${data.truckType}&destination=${data.droplatitude},${data.droplongitude}`);
    const result = await response;
    return result;
}

export const requestTripApi = async(data) =>{
    const response = await client.post(`requests/truck`, data);
    const result = await response;
    return result;
}