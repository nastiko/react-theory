import React from 'react';

function App() {

    function nameUser(name) {
        alert('Hello, ' + name);
    }

    return (
        <>
            <button onClick={() => nameUser('Anastasia')}>Click me!</button>
        </>
    );
}

export default App;
