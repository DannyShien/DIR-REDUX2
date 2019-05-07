import React from 'react'; 

function Button({handleClick}) {
    return (
        <button
            onClick={handleClick}
        >
            {label}
        </button>
    )
};



export default Button;
