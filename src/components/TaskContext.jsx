import React,{createContext,useContext,useReducer} from 'react'

const TaskContext=createContext();

const initialState={
    tasks:[
        {
            id:1,
            name:"Task 1",
            description:"Test Description 1",
            priority:"high",
            completed:false
        },
        {
            id:2,
            name:"Task 2",
            description:"Test Description 2",
            priority:"low",
            completed:true
        }
    ],
}

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
                    return task.id===action.payload?{...task, ...action.payload.updatedTask}:task
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