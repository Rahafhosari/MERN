import moment from 'moment'

export default function ProjectBar(props) {

    const startProject = () => {
        props.changeStage(props.project._id, 2)
    }

    const moveToCompleted = () => {
        props.changeStage(props.project._id, 3)
    }

    const deleteProject = () => {
        // send request to db
        // update App state
        props.deleteProject(props.project._id)
    }

    // let current = new Date()
    // console.log('project date: ' + props.project.dueDate)
    // console.log('new date: ' + current)
    // console.log(props.project.dueDate < current)
    let labelColor = props.project.dueDate < new Date() ? 'red' : 'black'
    // console.log('color: ' + labelColor)
    let btnText = ''
    let btnClassName
    let method
    switch (props.project.stage) {
        case 1: btnText = 'Start Project >'
            btnClassName = 'start-btn'
            method = startProject
            break;
        case 2: btnText = 'Move to Completed >'
            btnClassName = 'move-btn'
            method = moveToCompleted
            break;
        case 3: btnText = 'x Remove Project'
            btnClassName = 'remove-btn'
            method = deleteProject
            break;
    }

    // style={{color: labelColor}}
    return (<div className='project-bar'>
        <h2 className='project-title'>{props.project.title}</h2>
        <label>Due: </label>
        <label style={{color: labelColor}}>{moment(props.project.dueDate).format('DD-MM-YYYY')}</label>
        <div><button className={btnClassName} onClick={method}>{btnText}</button></div>
    </div>)
}