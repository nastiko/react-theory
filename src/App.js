import React, {useState} from 'react';

function App() {
    const [name, setName] = useState('Anastasyia');
    const [surname, setSurname] = useState('Hrynkevich');

    function changeName() {
        setName('Anastasia changed name');
    }

    function changeSurname() {
        setSurname('Hrynkevich is the right name')
    }

    return (
        <>
            <div>
                <p>{name}</p>
                <button onClick={changeName}>Change name</button>
            </div>
            <div>
                <p>{surname}</p>
                <button onClick={changeSurname}>Change surname</button>
            </div>
        </>
    );
}

export default App;
