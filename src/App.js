import React, {useState} from 'react';

function App() {
    const fruit = ['Choose a fruit', 'Apple', 'Banana', 'Orange'];
    const [value, setValue] = useState('');

    const options = fruit.map((option, index) => {
        return <option key={index} value={index}>{option}</option>
    });

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2 my-10">
                <select value={value} onChange={handleChange}>
                    {options}
                </select>
                <p>User has chosen: {value}</p>
            </div>
        </>
    );
}

export default App;
