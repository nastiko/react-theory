import React from 'react';

function App() {
    const table = (
        <>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Walle</td>
                <td>1 year</td>
            </tr>
            <tr>
                <td>Anastasia</td>
                <td>31 years</td>
            </tr>
            </tbody>
        </>);

    return (
        <>
            <table>
                {table}
            </table>

        </>
    );
}

export default App;
