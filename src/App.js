import React, {useState} from 'react';

function App() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    function getMean(arr) {
        let mean = 0;

        for (let elem of arr) {
            mean += elem;
        }

        return mean / arr.length;
    }

    function changeHandler(i, event) {
        const value = parseInt(event.target.value);
        setNotes([...notes.slice(0, i), value, ...notes.slice(i + 1)]);
    }

    const mean = notes.map((note, i) => {
        return <input
            className="border-[1px] border-[#0000000]"
            type="number"
            value={note}
            key={i}
            onChange={event => changeHandler(i, event)}/>
    })

    return (
        <>
            <div className="flex gap-4">
                {mean}
            </div>
            <p>The mean is {getMean(notes)}</p>
        </>
    )
}

export default App;
