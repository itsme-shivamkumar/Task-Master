import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { Badge } from 'react-bootstrap';

function TaskModal({onSubmit, onCancel, initialValue}) {
  const [show, setShow] = useState(true);
  const navigator=useNavigate();

  const handleClose = () =>{
    setShow(false);
    navigator('/');
  }
  const handleShow = () => setShow(true);
  const [task,setTask]=useState(initialValue);
    
  const handleChange=(e)=>{
      setTask({...task,[e.target.name]:e.target.value});
  }

  const handlePriorityChange=(e)=>{
    setTask({...task,"priority":e.target.name});
  }
  // this useEffect is must do
  useEffect(()=>{
      setTask(initialValue);
  },[initialValue])

  const handleSubmit=(e)=>{
      e.preventDefault();
      onSubmit(task);
      handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} className='bg-dark text-light outline-dark' data-bs-theme="dark" >
        <Modal.Header closeButton className='bg-dark text-light' >
          <Modal.Title >{(task?.id)?'Edit task':'Add task'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-light' >
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Task 1"
                autoFocus
                name='name' 
                value={task.name} 
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task description</Form.Label>
              <Form.Control as="textarea" rows={3} name='description' value={task.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{display:'flex', justifyContent:'space-between'}} >
                <Form.Label>Task Priority: 
                    <Badge bg={`${task.priority==="high"?"danger":task.priority==="medium"?"warning":"success"}`}>
                        Priority: {task.priority}
                    </Badge>
                </Form.Label>
                <Dropdown className='bg-dark text-light' >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Set Priority: 
                </Dropdown.Toggle>
          
                <Dropdown.Menu value={task.priority} >
                  <Dropdown.Item name='low' onClick={handlePriorityChange} >low</Dropdown.Item>
                  <Dropdown.Item name='medium' onClick={handlePriorityChange} >medium</Dropdown.Item>
                  <Dropdown.Item name='high' onClick={handlePriorityChange} >high</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark text-light' >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskModal;