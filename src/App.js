import React, {useState} from 'react';

function App() {
    const [currentRadioValue, setCurrentRadioValue] = useState("HTML");

    function handleChange(event) {
        setCurrentRadioValue(event.target.value);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center my-10">
                <p>What do you know?</p>
                <div>
                    <input
                        onChange={handleChange}
                        value="HTML"
                        checked={currentRadioValue === "HTML"}
                        type="radio"
                        name="radio"/>
                    <span className="ml-2">HTML</span>
                </div>
                <div>
                    <input
                        onChange={handleChange}
                        value="CSS"
                        checked={currentRadioValue === "CSS"}
                        type="radio"
                        name="radio"/>
                    <span className="ml-2">CSS</span>
                </div>
                <div>
                    <input
                        onChange={handleChange}
                        value="JS - Well done!"
                        checked={currentRadioValue === "JS - Well done!"}
                        type="radio"
                        name="radio"/>
                    <span className="ml-2">JS</span>
                </div>
                <p>I know {currentRadioValue}</p>
            </div>
        </>
    )
}

export default App;
