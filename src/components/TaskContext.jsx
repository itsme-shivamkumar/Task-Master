import React,{createContext,useContext,useReducer} from 'react'

const TaskContext=createContext();

const initialState={
    tasks:[],
}

const taskReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return {...state,tasks:[...state.tasks,action.payload]};
        case 'DELETE_TASK':
            return {...state,tasks: state.tasks.filter((task)=>task.id!==action.payload)};
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task)=>{
                    return task.id===action.payload.id?{...task, ...action.payload.updatedTask}:task
                })
            };
        default:
            return state;
    }
}

const TaskProvider = ({children}) => {
    const [state,dispatch]=useReducer(taskReducer,initialState);
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