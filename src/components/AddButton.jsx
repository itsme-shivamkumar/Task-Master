import React from 'react'
import { Link } from 'react-router-dom'
const AddButton = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', backgroundColor:'#202124'}} >
        <Link to={'/add'} >
            <button type="button" style={{width:'100vw', boxShadow:'2px 2px 80px black'}} className={"btn btn-success rounded-6 btn-lg"}>Add Task</button>
        </Link>
    </div>
  )
}

export default AddButton