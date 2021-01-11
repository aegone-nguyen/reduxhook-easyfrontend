import React from 'react';

function HobbyList(props) {
    const {hobbyList} = props
    return (
        <ul>
            {
                hobbyList.map(hobby => {
                    <li key={hobbyList.id}>{hobbyList.title}</li>
                })
            }
        </ul>
    );
}

export default HobbyList;