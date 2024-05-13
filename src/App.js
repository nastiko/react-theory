import React, {useState} from 'react';

function App() {
    const [year, setBornYear] = useState('');

    function handleChange (event) {
        const today = new Date();

        setBornYear((today.getFullYear() - event.target.value).toString());
    }

    return (
        <>
            <input className="border-[1px] border-[#000000]" type="number" onChange={handleChange}/>
            <p>When user was born: {year}</p>
        </>
    );
}

export default App;
