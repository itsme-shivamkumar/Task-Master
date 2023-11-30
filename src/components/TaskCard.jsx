import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function TaskCard({task,onDelete,onToggleComplete}) {

  return (
    <>
      {[
        // 'Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light',
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width:'20rem', maxHeight:'25rem', overflow:'hidden'}}
          className="mb-3"
        >
          <Card.Header style={{display:'flex', justifyContent:'space-between', alignItems:'center'}} >
            <Badge bg={`${task.priority==="high"?"danger":task.priority==="medium"?"warning":"success"}`}>
              Priority: {task.priority}
            </Badge>
            <span style={{display:'flex', marginRight:'5px'}}>
            <Form className='me-2' >
                <Form.Check // prettier-ignore
                  type="checkbox"
                  id={`completeCheckbox-${task.id}`}
                  label="Done?"
                  checked={task.completed}
                  onChange={onToggleComplete}
                />
            </Form>
                <span onClick={onDelete} style={{cursor:'pointer'}} >
                  🗑️
                </span>
            </span>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <span style={{textDecoration: task.completed?'line-through':'none'}} >
                {task.name}
              </span> 
            </Card.Title>
            <Card.Text style={{display:'flex', justifyContent:'space-between'}} >
              <span style={{textDecoration: task.completed?'line-through':'none', paddingBottom:'10px'}}>
                {task.description}
              </span>
              <span style={{alignSelf:'flex-end', marginBottom:'8px'}} >
              <Link to={`/edit/${task.id}`} >
                ✏️
              </Link>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default TaskCard;