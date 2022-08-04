
export default class Project{

    constructor(_id, title, dueDate){
        this._id = _id
        this.title = title
        this.dueDate = dueDate
        this.stage = 1
    }

    startProject(){
        this.stage = 2
    }
    
    moveToCompleted(){
        this.stage = 3
    }
}