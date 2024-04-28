import React from 'react';

function App() {
    const arr = [1, 2, 3, 4, 5];
    const list = <>{arr.map((item) => <li>List: {item}</li>)}</>

    return (
        <>
            <ul>
                {list}
            </ul>

        </>
    );
}

export default App;
