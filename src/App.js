import React from 'react';

function App() {

    function handleClick() {
        alert('Hello World!');
    }

    return (
        <>
            <button onClick={handleClick}>Click me!</button>
        </>
    );
}

export default App;
