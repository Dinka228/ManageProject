import {makeAutoObservable} from "mobx";

export default class ProjectStore{
    constructor() {
        this._diagramPage = false
        this._projectPage = false
        this._ideaPage = false
        this._forumPage = false
        this._profilePage = false
        this._myProject = false
        this._customer = false
        this._showCurrProjects = false
        this._showCurrIdea = false
        this._showAdmin = false
        this._showCreateUser = false
        this._showCreateProject = false
        this._showCreateTask = false
        this._projects = []
        this._ideas = []
        this._ideasMessage = []
        this._workersProject = []
        this._messages = []
        this._voices = []
        this._currProject = []
        this._currStage = []
        this._currTask = []
        this._currIdea = []
        this._stages = []
        this._tasks = []
        makeAutoObservable(this)
    }
    setProject(project){
        this._projects = project
    }
    setShowCreateTask(createTask){
        this._showCreateTask = createTask
    }
    setShowAdmin(admin){
        this._showAdmin = admin
    }
    setShowCreateUser(newUser){
        this._showCreateUser = newUser
    }
    setShowCreateProject(newProject){
        this._showCreateProject = newProject
    }
    setStages(stages){
        this._stages = stages
    }
    setTasks(tasks){
        this._tasks = tasks
    }
    setCurrIdea(currIdea){
        this._currIdea = currIdea
    }
    setCurrProject(currProject){
        this._currProject = currProject
    }
    setCurrStage(currStage){
        this._currStage = currStage
    }
    setCurrTask(currTask){
        this._currTask = currTask
    }
    setMessage(message){
        this._messages = message
    }
    setVoices(voice){
        this._voices = voice
    }
    setWorkerProject(workersProject){
        this._workersProject = workersProject
    }
    setDiagramPage(bool){
        this._diagramPage = bool
    }
    setProjectPage(bool){
        this._projectPage = bool
    }
    setIdeaPage(bool){
        this._ideaPage = bool
    }
    setForumPage(bool){
        this._forumPage = bool
    }
    setProfilePage(bool){
        this._profilePage = bool
    }
    setMyProject(bool){
        this._myProject = bool
    }
    setCustomer(bool){
        this._customer = bool
    }
    setShowCurrProject(bool){
        this._showCurrProjects = bool
    }
    setShowCurrIdea(bool){
        this._showCurrIdea = bool
    }
    setIdea(idea){
        this._ideas = idea
    }
    setIdeasMessage(ideasMessage){
        this._ideasMessage = ideasMessage
    }
    get voices(){
        return this._voices
    }
    get showCreateTask(){
        return this._showCreateTask
    }
    get showAdmin(){
        return this._showAdmin
    }
    get showCreateUser(){
        return this._showCreateUser
    }
    get showCreateProject(){
        return this._showCreateProject
    }
    get ideasMessage(){
        return this._ideasMessage
    }
    get currProject(){
        return this._currProject
    }
    get project(){
        return this._projects
    }
    get workersProject(){
        return this._workersProject
    }
    get idea(){
        return this._ideas
    }
    get diagramPage(){
        return this._diagramPage
    }
    get projectPage(){
        return this._projectPage
    }
    get myProject(){
        return this._myProject
    }
    get customer(){
        return this._customer
    }
    get showCurrProject(){
        return this._showCurrProjects
    }
    get ideaPage(){
        return this._ideaPage
    }
    get forumPage(){
        return this._forumPage
    }
    get profilePage(){
        return this._profilePage
    }
    get messages(){
        return this._messages
    }
    get stages(){
        return this._stages
    }
    get tasks(){
        return this._tasks
    }
    get currStage(){
        return this._currStage
    }
    get currTask(){
        return this._currTask
    }
    get currIdea(){
        return this._currIdea
    }

    get showCurrIdea(){
        return this._showCurrIdea
    }
}