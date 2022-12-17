import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createIdea = async(idea)=>{
    const {data} = await $authHost.post('api/idea',idea)
    return data
}
export const fetchIdea = async()=>{
    const {data} = await $host.get('api/idea')
    return data
}
export const fetchOneIdea = async(id)=>{
    const {data} = await $authHost.get(`api/idea/${id}`)
    return data
}