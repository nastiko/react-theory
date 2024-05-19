import React, {useState} from 'react';

function App() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');

    function handleChange1 (event) {
        return setValue1(+event.target.value); //`+` operator converts the string to a number
    }

    function handleChange2 (event) {
        return setValue2(+event.target.value);
    }

    function handleChange3 (event) {
        return setValue3(+event.target.value);
    }

    function handleChange4 (event) {
        return setValue4(+event.target.value);
    }

    function handleChange5 (event) {
        return setValue5(+event.target.value);
    }

    return (
        <>
            <div className="flex gap-2">
                <input className="border-[1px] border-[#000000]" type="number" onChange={handleChange1}/>
                <input className="border-[1px] border-[#000000]" type="number" onChange={handleChange2}/>
                <input className="border-[1px] border-[#000000]" type="number" onChange={handleChange3}/>
                <input className="border-[1px] border-[#000000]" type="number" onChange={handleChange4}/>
                <input className="border-[1px] border-[#000000]" type="number" onChange={handleChange5}/>
            </div>
            <p>Find average: {(value1 + value2 + value3 + value4 + value5) / 5}</p>
        </>
    );
}

export default App;
