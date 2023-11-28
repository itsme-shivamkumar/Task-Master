import React from 'react'
import { useTaskContext } from './TaskContext'
import TaskListItem from './TaskListItem';
import { Link } from 'react-router-dom';

const TaskList = () => {
    
    const {state,dispatch} =useTaskContext();

    const handleDelete=(id)=>{
        dispatch({type:'DELETE_TASK', payload:id});
    }

    const handleToggleComplete=(id)=>{
        dispatch({type:'TOGGLE_COMPLETE_TASK', payload: id})
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
    </>
    )
}

export default TaskList;