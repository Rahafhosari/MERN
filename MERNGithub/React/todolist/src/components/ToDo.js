import React, {useState} from 'react'

const ToDo = (props) => {
    const [doList,setDoList] = useState([{task:"Get Groceries", status:false},{task:"Go to the Hair Salon",status:false},{task:"Reply to Emails",status:false}]);
    const [newTask, setNewTask] = useState([""]);

    // Handlers

    const onClickHandler = e => {
        setDoList(doList.filter((item,i) => i !== parseInt(e.target.id)));
    }

    const checkboxHandler = e => {
        setDoList(doList.map( (item, index) => index === parseInt(e.target.id) 
        ? {task: item.task, status: e.target.checked} : //if task:item -> e.target check
        {task: item.task, status: item.status})); //else keep it as it is (show item and status box uunchecked)
        console.log(doList);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        setDoList(doList.concat({task:newTask, status: false}));
        setNewTask("");
    }
    return (
        <div className="DoList">
            <h2>Rahaf's To Do List</h2>
            <ul>
                { doList.map( (item,i) => {
                    return <li key={i}>
                            {item.status ? <span className={"style"}>{item.task}</span> : <span>{ item.task }</span> }
                            <button id={i} onClick={ onClickHandler} > Delete </button>
                            <label> is it Done? </label>
                            <input type="checkbox" checked={item.status} onChange={checkboxHandler}  id={i}/> 
                    </li>
                                            } 
                            ) 
                }
            </ul>
            <form onSubmit={onSubmitHandler}>
                <input type={"text"}  onChange={e => setNewTask(e.target.value)} value={newTask}/>
                <input type={"submit"} value={"Add New Task"}/>
            </form>
        </div>
    );
};

export default ToDo;

//two statements are shown by default using the useState 
//we inialize thne n the useState 


//if{task :item, status: e.target.checked}
//then {task :item, status: e.target.checked}
//else 
//