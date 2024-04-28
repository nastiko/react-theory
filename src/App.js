import React from 'react';

function App() {
    const isAdult = true;
    const link = 'https://anastasia.grinkevi.ch/';

    return (
        <>
            {!isAdult && <a href={link}>Link</a>}
        </>
    );
}

export default App;
