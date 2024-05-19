import React, {useState} from 'react';

function App() {
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2 my-10">
                <lavel>Choose a fruit:
                    <select value={value} onChange={handleChange}>
                        <option>Apple</option>
                        <option>Banana</option>
                        <option>Orange</option>
                    </select>
                </lavel>
                <p>User has chosen: {value}</p>
            </div>
        </>
    );
}

export default App;
