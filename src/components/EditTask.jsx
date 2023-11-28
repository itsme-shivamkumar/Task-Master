import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useTaskContext } from './TaskContext';

const EditTask = () => {
  const navigator=useNavigate();
  const [task,setTask]=useState({
    name:'',
    description:'',
    priority:'',
    completed: false,
    id:-1,
  })
  const {id} = useParams();
  const {state,dispatch}=useTaskContext();
  useEffect(()=>{
    const existingTask=state.tasks.find((t)=>t.id===parseInt(id));
    if(existingTask){
      setTask(existingTask);
    }
  },[])

  const handleEdit=(updatedTask)=>{
    dispatch({type:'UPDATE_TASK', payload:{...updatedTask, id:task.id}})
    navigator('/');
  }
  const handleCancel=()=>{
    navigator('/');
  }
  return (
    <>
      <h1>Edit Task</h1>
      <TaskForm onSubmit={handleEdit} onCancel={handleCancel} initialValue={task} />
    </>
  )
}

export default EditTask