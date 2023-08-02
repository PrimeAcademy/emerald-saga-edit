import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const studentToEdit = useSelector(store => store.studentToEdit);

    const handleChange = (event, propertyToChange) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: {
                property: propertyToChange, // 'cohort'
                value: event.target.value // 'Diamon
            }
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // dispatch an action that is being listened for by a saga
        dispatch({ type: 'SUBMIT_EDIT_STUDENT', payload: studentToEdit });

        history.push('/');
    }

    const cancelEdit = () => {
        history.push('/');
    }
    
    return (
        <>
            <h2>Edit form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={studentToEdit.cohort}
                    placeholder='Cohort'
                    // Update the redux store 
                    onChange={(event) => handleChange(event, 'cohort')}
                />
                <input value={studentToEdit.first_name} placeholder='First name' onChange={(event) => handleChange(event, 'first_name')} />
                <input value={studentToEdit.last_name} placeholder='Last name' onChange={(event) => handleChange(event, 'last_name')} />
                <input value={studentToEdit.github_name} placeholder='Github name' onChange={(event) => handleChange(event, 'github_name')} />
                <button type='submit'>Update student</button>
                <button onClick={cancelEdit}>Cancel</button>
            </form>
        </>
    )
}

export default EditForm;