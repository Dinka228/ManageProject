import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const createIdeaMessage = async(ideaMessage)=>{
    const {data} = await $authHost.post('api/ideaMessage',ideaMessage)
    return data
}
export const fetchIdeaMessage = async()=>{
    const {data} = await $host.get('api/ideaMessage')
    return data
}
export const fetchOneIdeaMessage = async(id)=>{
    const {data} = await $authHost.get(`api/ideaMessage/${id}`)
    return data
}