import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const studentToEdit = useSelector((store) => store.studentToEdit);

  function handleChange(event, propertyToChange) {
    // Dispatch an action to update the studentToEdit piece of state in the redux store
    dispatch({
      type: 'EDIT_ONCHANGE',
      payload: { property: propertyToChange, value: event.target.value }
    });

  }

  function handleSubmit(event) {
    event.preventDefault();
    // Dispatch an action to trigger the editStudent saga
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
