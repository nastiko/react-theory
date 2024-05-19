import React, {useState} from 'react';

function App() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const [sum, setSum] = useState(0);
    const [multiply, setMultiply] = useState(0);

    function handleChange1 (event) {
        return setValue1(event.target.value);
    }

    function handleChange2 (event) {
        return setValue2(event.target.value);
    }

    function handleSum() {
        return setSum(Number(value1) + Number(value2));
    }

    function handleMultiply() {
        return setMultiply(Number(value1) * Number(value2));
    }

    return (
        <>
            <div className="flex gap-2">
                <input className="border-[1px] border-[#000000]" type="number" onChange={handleChange1}/>
                <input className="border-[1px] border-[#000000]" type="number" onChange={handleChange2}/>
            </div>
            <div className="flex gap-2 mt-6">
                <p>Find sum: {sum}</p>
                <p>Find multiply: {multiply}</p>
            </div>
            <div className="flex gap-2 mt-6">
                <button onClick={handleSum} className="bg-orange-500 rounded px-[15px] py-[4px] ">Sum</button>
                <button onClick={handleMultiply} className="bg-amber-400 rounded px-[15px] py-[4px] ">Multiply</button>
            </div>
        </>
    );
}

export default App;
