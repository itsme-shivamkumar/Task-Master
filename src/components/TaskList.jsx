import React from 'react'
import { useTaskContext } from './TaskContext'
import TaskListItem from './TaskListItem';
import { Link, useNavigate } from 'react-router-dom';
import { clearTasksFromLocalStorage } from './localStorageUtils';

const TaskList = () => {

    const navigator=useNavigate();
    
    const {state,dispatch} =useTaskContext();

    const handleDelete=(id)=>{
        dispatch({type:'DELETE_TASK', payload:id});
    }

    const handleToggleComplete=(id)=>{
        dispatch({type:'TOGGLE_COMPLETE_TASK', payload: id})
    }

    const handleClearLocalStorage=()=>{
        clearTasksFromLocalStorage();
        navigator(0);
    }

    return (
    <>
        {state.tasks.map((task)=>{
            return (<TaskListItem
                key={task.id}
                task={task}
                onDelete={()=>handleDelete(task.id)}
                onToggleComplete={()=>handleToggleComplete(task.id)}
            />)
        })}
        <Link to={'/add'} >
            <button>+Add Task</button>
        </Link>

        <button onClick={handleClearLocalStorage} >Clear Local Storage</button>
    </>
    )
}

export default TaskList;