import React from 'react'
import { useTaskContext } from './TaskContext'
import TaskListItem from './TaskListItem';
import { Link, useNavigate } from 'react-router-dom';
import { clearTasksFromLocalStorage } from './localStorageUtils';
import './TaskList.css'
import TaskCard from './TaskCard';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';
import Header from './Header';
import AddButton from './AddButton';

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
        <div >
        <Header/>
    <span className='list' >
        <span className="startingCol" >
        {state.tasks.filter((task)=>task.priority==="high").map((task)=>{
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
        <span className="startingCol">
        {state.tasks.filter((task)=>task.priority==="medium").map((task)=>{
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
        <span className="startingCol">
        {state.tasks.filter((task)=>task.priority==="low").map((task)=>{
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

    </span>
        {/* <span onClick={handleClearLocalStorage} >Clear Local Storage</span> */}
        </div>
    </>
    )
}

export default TaskList;