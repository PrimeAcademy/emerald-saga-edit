import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function EditForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const studentToEdit = useSelector((store) => store.studentToEdit);

  function handleChange(event, propertyToChange) {
    dispatch({
      type: 'EDIT_ONCHANGE',
      payload: { property: propertyToChange, value: event.target.value }
    });

  }

  // Called when the submit button is pressed
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'EDIT_STUDENT', payload: studentToEdit })
    history.push('/');
  };


  return (
    <>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleChange(event, 'cohort')}
          placeholder='Cohort'
          value={studentToEdit.cohort}
        />
        <input
        onChange={(event) => handleChange(event, 'first_name')}
        placeholder='First name'
        value={studentToEdit.first_name}
      />
       <input
        onChange={(event) => handleChange(event, 'last_name')}
        placeholder='Last name'
        value={studentToEdit.last_name}
      />
       <input
        onChange={(event) => handleChange(event, 'github_name')}
        placeholder='GitHub username'
        value={studentToEdit.github_name}
      />
        <input type='submit' value='Update Student' />
      </form>
    </>
  );
}

export default EditForm;
