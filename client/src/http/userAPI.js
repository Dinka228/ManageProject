import {$authHost,$host} from "./index";
import jwt_decode from 'jwt-decode'

export const registration = async(email,password,role,name,telephone)=>{
    const {data} = await $host.post('api/user/registration',{email,password,role,name,telephone})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}
export const login = async(email,password)=>{
    const {data} = await $host.post('api/user/login',{email,password})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}
export const check = async()=>{
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}
export const fetchUser = async()=>{
    const {data} = await $host.get('api/user/user')
    return data
}