import React from 'react'; 

function Button({handleAll, handleCaught, handleUncaught}) {
    return (
        <>    
            <button onClick={handleAll}>ALL</button>
            <button onClick={handleCaught}>CAUGHT</button>
            <button onClick={handleUncaught}>UNCAUGHT</button>
        </>    
    );
}

export default Button;
