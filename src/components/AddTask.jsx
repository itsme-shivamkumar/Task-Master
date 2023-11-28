import React from 'react'
import TaskForm from './TaskForm'
import { useTaskContext } from './TaskContext'
import { useNavigate } from 'react-router-dom'
const AddTask = () => {
  const {dispatch} = useTaskContext();
  const navigate=useNavigate();
  const handleAddTask=(task)=>{
    dispatch({type:'ADD_TASK', payload:{...task,id:Date.now()}})
    navigate('/');
  }
  const handleCancel=()=>{
    navigate('/');
  }
  return (
    <>
      <h1>Add Task</h1>
      <TaskForm onSubmit={handleAddTask} onCancel={handleCancel} initialValue={{name:'Enter Task Name', description:'Enter Description of Task', priority:'low', completed:false}} />
    </>
    
  )
}

export default AddTask