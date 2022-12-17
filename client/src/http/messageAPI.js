import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createMessage = async(message)=>{
    const {data} = await $authHost.post('api/message',message)
    return data
}
export const fetchMessage = async()=>{
    const {data} = await $host.get('api/message')
    return data
}
export const fetchOneMessage = async(getId,createId)=>{
    const {data} = await $authHost.get(`api/message/${getId}/${createId}`)
    return data
}