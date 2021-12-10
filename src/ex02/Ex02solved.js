import React, { useState } from "react";

const Ex02 = () => {
    // state
    const [color, setColor] = useState('white');

    // on change handler 
    const onChangeColor = e => {
        setColor(e?.target?.value);
    }

    return (
        <>
            <h2>Ex02</h2>
            <input type='text' onChange={onChangeColor} />
            <br />
            <div style={{
                backgroundColor: color || 'white',
                borderRadius: '50%',
                width: 100,
                height: 100
            }}
            >
            </div>
        </>
    );
}

export default Ex02;