import React, {useState} from 'react';

function App() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    function handleChange1() {
        setChecked1(!checked1);
    }

    function handleChange2() {
        setChecked2(!checked2);
    }

    function handleChange3() {
        setChecked3(!checked3);
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2 my-10">
                <p>What do you know?</p>
                <div>
                    <input className="border-[1px] border-[#000000]" type="checkbox" checked={checked1} onChange={handleChange1}/>
                    <span className="ml-2">HTML</span>
                </div>
                <div>
                    <input className="border-[1px] border-[#000000]" type="checkbox" checked={checked2} onChange={handleChange2}/>
                    <span className="ml-2">CSS</span>
                </div>
                <div>
                    <input className="border-[1px] border-[#000000]" type="checkbox" checked={checked3} onChange={handleChange3}/>
                    <span className="ml-2">JS</span>
                </div>
                <p>I work with: {checked1 ? 'HTML ' : ''} {checked2 ? 'CSS ' : ''} {checked3 ? 'JS' : ''}</p>
            </div>
        </>
    );
}

export default App;
