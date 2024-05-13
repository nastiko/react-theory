import React, {useState} from 'react';

function App() {
    const [count, setCount] = useState(1);

    function increaseNumber() {
        setCount(count + 1);
    }

    function decreaseNumber() {
        setCount(count - 1);
    }


    return (
        <>
            <p>{count}</p>
            <div className="flex gap-4 py-5 px-5">
                <button className="px-5 py-2 border-[1px] border-[#000000]" onClick={increaseNumber}>Increase</button>
                <button className="px-5 py-2 border-[1px] border-[#000000]" onClick={decreaseNumber}>Decrease</button>
            </div>
        </>
    );
}

export default App;
