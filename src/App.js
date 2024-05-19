import React, {useState} from 'react';

function App() {
    let message;
    const [checked, setChecked1] = useState(false);

    function handleChange() {
        setChecked1(!checked);
    }

    if (checked) {
        message =
            <div>
                <h2>Woo-Hoo, you're 18!</h2>
            </div>;
    } else {
        message =
            <div>
                <h2>Sorry, content only for 18+</h2>
            </div>;
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2 my-10">
                <p>Are you 18 years old?</p>
                <div>
                    <input className="border-[1px] border-[#000000]" type="checkbox" checked={checked} onChange={handleChange}/>
                    <span className="ml-2">Yes</span>
                </div>
                <div>{checked ? message : ''}</div>
            </div>
        </>
    );
}

export default App;
