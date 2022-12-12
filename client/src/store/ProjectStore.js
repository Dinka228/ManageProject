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
        this._projects = [{id:1,name:"Project1",curatorId:3,progress:'In progress', customerId:2},
            {id:2,name:"Project2",curatorId:1,progress:'In progress', customerId:2},
            {id:3,name:"Project3",curatorId:4,progress:'In progress', customerId:2}]
        this._ideas = [{id:1,name:"JavaScript",creatorId:1},
            {id:2,name:"С++",creatorId:1}]
        this._ideasMessage = [{id:1,text:"My idea",ideaId:1,creatorId:1},
            {id:2,text:"My idea",ideaId:1,creatorId:2},
            {id:3,text:"My idea",ideaId:1,creatorId:3},
            {id:4,text:"My idea",ideaId:2,creatorId:4},
            {id:5,text:"My idea",ideaId:2,creatorId:1},
            {id:6,text:"My idea",ideaId:2,creatorId:2},
            {id:7,text:"My idea",ideaId:2,creatorId:3},]
        this._workersProject = [
            {id:1,workerId:2,projectId:1},
            {id:1,workerId:3,projectId:2}
        ]
        this._messages = [{id:1,text:"Починається опитування про Дмитро Дробинко",type:"poll",workerId:"1",to:"All",workerThatPollId:2},
            {id:2,text:"Розпочався набір у проект: Project 1",type:"project",workerId:"2",to:"Junior",},
            {id:3,text:"Middle",type:"default",workerId:"3",to:"Middle"},
            {id:4,text:"Senior",type:"default",workerId:"4",to:"Senior"},
            {id:5,text:"Middle",type:"default",workerId:"5",to:"Middle"},
            {id:6,text:"Junior",type:"default",workerId:"6",to:"Junior"},
            {id:7,text:"Розпочався набір у проект: Project 1",type:"default",workerId:"1",to:"All"},]
        this._voices = []
        this._currProject = []
        this._currStage = []
        this._currTask = []
        this._currIdea = []
        this._stages = [{id:1,name:'Stage 1',projectId:1,curatorId:5},
            {id:2,name:'Stage 2',projectId:1,curatorId:3}]
        this._tasks = [{id:1,name:'Task 1',projectId:1,stageId:1,curatorId:1, answer:"Answer1",progress:"In Progress", priority:"High priority",date:"21.12.2022"},
            {id:2,name:'Task 2',projectId:1,stageId:1,curatorId:2, answer:"Answer2",progress:"In Progress", priority:"Low priority",date:"22.12.2022"},
            {id:3,name:'Task 3',projectId:1,stageId:1,curatorId:3, answer:"Answer3",progress:"Complete", priority:"High priority",date:"23.12.2022"}]
        makeAutoObservable(this)
    }
    setProject(project){
        this._projects = project
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