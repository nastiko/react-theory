import React, {useState} from 'react';

function App() {
    const [characterCount, setCharacterCount] = useState(0);

    function handleChange(event) {
        setCharacterCount(event.target.value.length);
    }

    return (
        <>
            <input type="text" onChange={handleChange}/>
            <p>Total Number of characters: {characterCount}</p>
        </>
    );
}

export default App;
