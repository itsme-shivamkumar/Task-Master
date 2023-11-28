import React, { useEffect, useState } from 'react'

const TaskForm = ({onSubmit, onCancel, initialValue}) => {

    const [task,setTask]=useState(initialValue);
    
    const handleChange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value});
    }
    // this useEffect is must do
    useEffect(()=>{
        setTask(initialValue);
    },[initialValue])

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("task sending is ",task);
        onSubmit(task);
    }
  return (
    <form onSubmit={handleSubmit} >
        <label>
            Task Name:
            <input type='text' name='name' value={task.name} onChange={handleChange} />
        </label>
        <br/>
        <label>
            Task Description:
            <textarea name='description' value={task.description} onChange={handleChange} />
        </label>
        <br/>
        <label>
            Priority:
            <select name='priority' value={task.priority} onChange={handleChange} >
                <option value='low' >Low</option>
                <option value='medium' >Medium</option>
                <option value='high' >High</option>
            </select>
        </label>
        <br/>
        <button type='submit' >Submit</button>
        <button type='button' onClick={onCancel} >Cancel</button>
    </form>
  )
}

export default TaskForm