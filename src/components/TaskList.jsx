import React from 'react'
import { useTaskContext } from './TaskContext'
import TaskListItem from './TaskListItem';

const TaskList = () => {
    
    const {state,dispatch} =useTaskContext();

    const handleDelete=(id)=>{
        dispatch({type:'DELETE_TASK', payload:id});
    }

    const handleToggleComplete=()=>{
        
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
    </>
    )
}

export default TaskList;