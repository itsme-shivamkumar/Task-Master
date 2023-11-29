import React from "react";
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./components/TaskContext";
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
function App() {
  return (
    <span className="app" >
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList/>} />
          <Route path="/add" element={<AddTask/>}/>
          <Route path="/edit/:id" element={<EditTask/>}/>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
    </span>
  );
}

export default App;
