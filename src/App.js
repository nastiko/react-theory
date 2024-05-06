import React, {useState} from 'react';

function App() {
    const [inCart, setInCart] = useState(false);

    function incrementCart() {
        setInCart(!inCart);
    }


    return (
        <>
          <p>{inCart ? 'item in the cart' : 'item is not the cart'}</p>
          <button onClick={incrementCart}>Add item</button>
        </>
    );
}

export default App;
