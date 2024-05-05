import React from 'react';

function App() {
    const users = [
        {name: 'user1', surn: 'surn1', age: 30},
        {name: 'user2', surn: 'surn2', age: 31},
        {name: 'user3', surn: 'surn3', age: 32},
    ];

    const result = users.map((user, index) => {
        return <li> key={index} {user.name} {user.surn} - {user.age} </li>
    })



    return (
        <>
            <div>{result}</div>
        </>
    );
}

export default App;
