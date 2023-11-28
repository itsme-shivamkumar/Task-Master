const TASKS_STORAGE_KEY='tasks';
export const getTasksFromLocalStorage=()=>{
    const tasksJson=localStorage.getItem(TASKS_STORAGE_KEY);
    if(tasksJson && tasksJson!=='undefined'){
        return JSON.parse(tasksJson);
    }
    return [
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
    ];
}
export const saveTasksToLocalStorage=(tasks)=>{
    localStorage.setItem(TASKS_STORAGE_KEY,JSON.stringify(tasks));
}
export const clearTasksFromLocalStorage=()=>{
    localStorage.clear();
}