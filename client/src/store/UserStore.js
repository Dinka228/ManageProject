import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = true
        this._users = [
            {id:1,role:"ADMIN",name:"User1",telephone:380631779644,email:"dan3v@gmail.com",password:'11111',resultStudy:"",profActivity:80,workInProject:70,loyalty:55, countTask:5},
            {id:2,role:"Customer",name:"User2",telephone:121442343242,email:"dima@gmail.com",resultStudy:"",profActivity:60,workInProject:40,loyalty:90, countTask:4},
            {id:3,role:"Middle",name:"User3",telephone:54645744564,email:"serega@gmail.com",resultStudy:"",profActivity:70,workInProject:30,loyalty:20, countTask:3},
            {id:4,role:"Middle",name:"User4",telephone:768646345235,email:"petya@gmail.com",resultStudy:"",profActivity:55,workInProject:20,loyalty:80, countTask:2},
            {id:5,role:"Middle",name:"User5",telephone:234523526434,email:"vasya@gmail.com",resultStudy:"",profActivity:70,workInProject:15,loyalty:95, countTask:6},
            {id:6,role:"Senior",name:"User6",telephone:436453643534,email:"lesha@gmail.com",resultStudy:"",profActivity:65,workInProject:55,loyalty:45, countTask:1}
        ]
        this._currentUser = {id:2,role:"Customer",name:"User2",telephone:121442343242,email:"dima@gmail.com",resultStudy:"",profActivity:60,workInProject:40,loyalty:90, countTask:4}
        this._currentProfile = {}
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
    get currProfile(){
        return this._currentProfile
    }
}