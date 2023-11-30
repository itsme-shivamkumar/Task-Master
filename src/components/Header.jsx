import React from 'react'
import icon from '../assets/task_management_icon.png';
import AddButton from './AddButton';
const Header = () => {
  return (
    <div style={{position:'fixed', zIndex:3, width:'100%',backgroundColor:'#202124'}}>
    <nav style={{boxShadow:'12px 12px 12px #202020',width:'100%', height:'60px', display:'flex', justifyContent:'center'}} >
        <img src={icon} style={{filter:'invert(1)', width:28, height:30, marginTop:8}}  />
        <h3 style={{marginTop:8}} >Task Master</h3>
    </nav>
    <AddButton/>
    </div>
  )
}

export default Header