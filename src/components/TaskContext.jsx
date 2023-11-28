import React,{createContext,useContext,useEffect,useReducer} from 'react'
import {getTasksFromLocalStorage,saveTasksToLocalStorage} from '../components/localStorageUtils'

const TaskContext=createContext();

const taskReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return {...state,tasks:[...state.tasks,action.payload]};
        case 'DELETE_TASK':
            return {...state,tasks: state.tasks.filter((task)=>task.id!==action.payload)};
        case 'UPDATE_TASK':
            console.log("state and action is",state.tasks,action.payload)
            return {
                ...state,
                tasks: state.tasks.map((task)=>{
                    return task.id===action.payload.id?{...task, ...action.payload}:task
                })
            };
        case 'TOGGLE_COMPLETE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task)=>task.id===action.payload?{...task, completed:!task.completed}:task)
            }
        default:
            return state;
    }
}

const TaskProvider = ({children}) => {
    const initialState={
        tasks:getTasksFromLocalStorage()
    }

    const [state,dispatch]=useReducer(taskReducer,initialState);

    useEffect(()=>{
        saveTasksToLocalStorage(state.tasks);
    },[state.tasks])

  return (
    <TaskContext.Provider value={{state,dispatch}}>
        {children}
    </TaskContext.Provider>
  )
}

const useTaskContext=()=>{
    const context=useContext(TaskContext);
    if(!context){
        throw new Error('useTaskContext must be used within TaskProvider');
    }
    return context;
}

export {TaskProvider,useTaskContext};