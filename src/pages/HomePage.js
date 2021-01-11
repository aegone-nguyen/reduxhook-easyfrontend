import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

function HomePage(props) {
    //connect vào redux store
    const hobbyList = useSelector(state => state.hobby.list) // hobby này trong reducer index.js
    //const activeId = us
    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        //Create random hobbyObject: id + Title
        const newId = (1000 + (Math.trunc.random() * 9000))
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }
        //Dispatch action to add new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    return (
        <div>
            <h1>REDUX HOOKS - Home Page</h1>
            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList hobbyList={hobbyList}></HobbyList>
        </div>
    );
}

export default HomePage;