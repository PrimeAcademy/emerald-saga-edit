import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';

function Home() {

    const dispatch = useDispatch();

    let [currentStudent, setCurrentStudent] = useState({});

    //On Load, call server
    useEffect(() => {
        console.log('in useEffect')
        dispatch({type: 'FETCH_STUDENTS'});
    }, [])

    return (
        <div className="App">
            <h2>Add a Student</h2>
            <StudentForm currentStudent={currentStudent} />

            <h2>Student list:</h2>
            <StudentList />
        </div>
    );

}

export default Home;
