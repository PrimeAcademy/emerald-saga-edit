import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StudentDetail(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  function handleEditClick() {
    // go to /edit
    // /edit will need access to the current student we clicked on 
    dispatch({
      type: 'SET_EDIT_STUDENT',
      payload: props.student
    });
    
    history.push('/edit');
  }

  return (
    <tr>
      <td>{props.student.cohort}</td>
      <td>{props.student.first_name}</td>
      <td>{props.student.last_name}</td>
      <td>{props.student.github_name}</td>
      <td><button onClick={handleEditClick}>Edit</button></td>
    </tr>
  );
}

export default StudentDetail;