import React from 'react';

function App() {
    const users = [
        {id: 1, name: 'user1', surname: 'surn1', age: 30},
        {id: 2, name: 'user2', surname: 'surn2', age: 31},
        {id: 3, name: 'user3', surname: 'surn3', age: 32},
    ];

    const result = users.map((user) => {
        return <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.age}</td>
        </tr>
    })



    return (
        <>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Age</td>
                </tr>
                </thead>
                <tbody>
                {result}
                </tbody>
            </table>
        </>
    );
}

export default App;
