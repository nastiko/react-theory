import React, {useState} from 'react';

function App() {
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <>
            <input value={value} onChange={handleChange}/>
            <p>text: {value}</p>
        </>
    );
}

export default App;
