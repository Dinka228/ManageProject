import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._users = []
        this._currentUser = {}
        this._currentProfile = {}
        this._currentMessageUser = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._users = user
    }
    setCurrentUser(currUser){
        this._currentUser = currUser
    }
    setCurrentMessageUser(currMessageUser){
        this._currentMessageUser = currMessageUser
    }
    setCurrentProfile(currProfile){
        this._currentProfile = currProfile
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._users
    }
    get currUser(){
        return this._currentUser
    }
    get currMessageUser(){
        return this._currentMessageUser
    }
    get currProfile(){
        return this._currentProfile
    }
}