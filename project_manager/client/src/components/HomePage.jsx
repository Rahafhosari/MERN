import ProjectColumn from './ProjectColumn'
import {useNavigate} from 'react-router-dom'

export default function HomePage(props) {

    let navigate = useNavigate()
    const navigateToNewPage = () => {
        navigate('/projects/new')
    }

    const backloglist = []
    const inProgressList = []
    const completedList = []

    props.projects.forEach((p) => {
        switch (p.stage) {
            case 1: backloglist.push(p)
                break;
            case 2: inProgressList.push(p)
                break;
            case 3: completedList.push(p)
                break;
        }
    })

    // console.log(backloglist)
    // console.log('**')
    // console.log(inProgressList)
    // console.log('**')
    // console.log(completedList)

    return (
        <div>
            <div className='projects-table'>
                <ProjectColumn key={'backlog'} projects={backloglist} columnType='cloumn backlog' columnTitle='Backlog' changeStage={props.changeStage} deleteProject={props.deleteProject}></ProjectColumn>
                <ProjectColumn key={'in-progress'} projects={inProgressList} columnType='cloumn in-progress' columnTitle='In Progress' changeStage={props.changeStage} deleteProject={props.deleteProject}></ProjectColumn>
                <ProjectColumn key={'completed'} projects={completedList} columnType='column completed' columnTitle='Completed' changeStage={props.changeStage} deleteProject={props.deleteProject}></ProjectColumn>
            </div>
            <div className='addBtnDiv'>
                <button className='add blueBtn' onClick={navigateToNewPage}>Add New Project</button>
            </div>
        </div>
    )
}