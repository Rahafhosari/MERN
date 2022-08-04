import { useState } from 'react'
import Project from '../classes/Project';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function NewProject(props) {

    const [project, setProject] = useState('')
    const [dueDate, setDueDate] = useState('')

    let navigate = useNavigate()
    const navigateToHome = () => {
        navigate('/')
    }

    const submit = async () => {
        // check required fields

        if (dueDate === '' || project === '') {
            alert('Project title and Due date fields are required')
            return
        }
        if (project.length < 3) {
            alert('project name must be more than 3 characters long')
            return
        }
        // create new project
        // let result = await axios.post('', { title: project, dueDate: dueDate, stage: 1 })
        // const newProject = new Project(result._id, result.title, result.dueDate)
        const newProject = new Project('10', project, dueDate)
        // add it to app's list
        props.addNewProject(newProject)
        // navigate to home page
        navigateToHome()
    }

    const handleProject = (e) => {
        setProject(e.target.value)
    }

    const handleDueDate = (e) => {
        setDueDate(e.target.value)
    }

    return (<div>
        <div>
            <a onClick={navigateToHome}>Back to Dashboard</a>
        </div>
        <div className='create-new-project'>
            <h2>Plan a new project</h2>
            <div className='form'>
                <table>
                    <tr>
                        <td className='text'><label>Project</label></td>
                        <td><input className='td-input' value={project} onChange={handleProject}></input></td>
                    </tr>
                    <tr>
                        <td className='text'><label>Due Date</label></td>
                        <td >
                            <input className='td-input' type="date" value={dueDate} onChange={handleDueDate}></input>
                        </td>
                    </tr>
                </table>
                <div>
                    <button className='plan blueBtn' onClick={submit}>Plan Project</button>
                </div>
            </div>
            {/* <div>
                <label>Project</label>
                <input value={project} onChange={handleProject}></input>
            </div>
            <div>
                <label>Due Date</label>
                <input type="date" value={dueDate} onChange={handleDueDate}></input>
            </div>
            <div>
                <button className='plan blueBtn' onClick={submit}>Plan Project</button>
            </div> */}
        </div>

    </div>)
}