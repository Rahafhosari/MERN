import React, {useState} from 'react'

function ToDoFrom() {
    const [newTask,setNewTask] =useState("")
    const [doList, setDoList] = useState([])

    const onSubmitHandler = e => {
        e.preventDefault();
        setDoList(doList.concat({task:newTask, status: false}));
        setNewTask("");
        console.log(doList);
    }

    return (
        <>
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type={"text"}  onChange={e => setNewTask(e.target.value)} value={newTask}/>
                <input type={"submit"} value={"Add New Task"}/>
            </form>
        </div>
        </>
    )
}

export default ToDoFrom
