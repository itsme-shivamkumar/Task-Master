import React from 'react'
import { Link } from 'react-router-dom'


const TaskListItem = ({task,onDelete,onToggleComplete}) => {

    return (
    <>
        <span style={{textDecoration: task.completed?'line-through':'none'}} >
            {task.name} - {task.description} - {task.priority}
        </span>  
        <input type='checkbox' checked={task.completed} onChange={onToggleComplete} />
        <button onClick={onDelete} >Delete</button>
        <Link to={`/edit/${task.id}`} >
            <button>Edit</button>
        </Link>
    </>
  )
}

export default TaskListItem