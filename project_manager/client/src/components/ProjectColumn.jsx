import ProjectBar from './ProjectBar'

export default function ProjectColumn(props) {

    props.projects.sort(function(a, b){
        return a.dueDate-b.dueDate
    })
    
    return (
        <div className={props.columnType}>
            <div className='column-title'><h2>{props.columnTitle}</h2></div>
            <div className='bars'>
                {props.projects.map( p => { return <ProjectBar key={p._id} project={p} changeStage={props.changeStage} deleteProject={props.deleteProject}></ProjectBar>})}
            </div>
        </div>
    )
}