import React, {useState} from 'react';

function conversion(num) {
    return ((num - 32)/1.8).toString();
}

function App() {
    const [fahrenheit, setFahrenheit] = useState(0);

    function handleChange (event) {
        return setFahrenheit(event.target.value);
    }

    return (
        <>
            <input className="border-[1px] border-[#000000]" type="number" value={fahrenheit} onChange={handleChange}/>
            <p>Conversion F in C: {conversion(fahrenheit)}</p>
        </>
    );
}

export default App;
