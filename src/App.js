import React, {useState} from 'react';

function App() {
    const [checked, setChecked] = useState(true);
    const [response, setResponse] = useState(true);

    function handleChange() {
        setChecked(!checked);
    }

    function handleResponse() {
        setResponse(checked);
    }

    return (
        <>
            <div className="flex justify-center items-center gap-2 my-10">
                <input className="border-[1px] border-[#000000]" type="checkbox" checked={checked} onChange={handleChange}/>
                <p>Response: {response ? 'Hello, User' : 'Goodbye, User'}</p>
                <button onClick={handleResponse} className="bg-amber-400 rounded px-[15px] py-[4px] ">Click me!</button>
            </div>
        </>
    );
}

export default App;
