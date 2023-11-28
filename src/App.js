import React from "react";
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./components/TaskContext";

function App() {
  return (
    <TaskProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList/>} />
        <Route path="/add" element={<AddTask/>}/>
        <Route path="/edit/:id" element={<EditTask/>}/>
      </Routes>
    </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
