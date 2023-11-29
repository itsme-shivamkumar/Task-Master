import React from 'react'
import { useTaskContext } from './TaskContext'
import TaskListItem from './TaskListItem';
import { Link, useNavigate } from 'react-router-dom';
import { clearTasksFromLocalStorage } from './localStorageUtils';
import './TaskList.css'
import TaskCard from './TaskCard';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';

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
        <div>
    <span className='list' >
        {state.tasks.map((task)=>{
            return (<>
            {/* <TaskListItem
                key={task.id}
                task={task}
                onDelete={()=>handleDelete(task.id)}
                onToggleComplete={()=>handleToggleComplete(task.id)}
            /> */}
            <TaskCard
                key={task.id}
                task={task}
                onDelete={()=>handleDelete(task.id)}
                onToggleComplete={()=>handleToggleComplete(task.id)}
            />
            </>)
        })}

    </span>
    <span className={'addBtn'} >
        <Link to={'/add'} >
            <button type="button" class="btn btn-success rounded-6 btn-lg">Add Task</button>
        </Link>
    </span>
        {/* <span onClick={handleClearLocalStorage} >Clear Local Storage</span> */}
    </div>
    )
}

export default TaskList;