import React, { useState } from "react";

const Ex02 = () => {
    /*
    We have an input below and a white circle. Let's make the circle
    change color based on our input. For instance, if we type
    'red', we want the circle to turn red. If we type 'green',
    we want the circle to turn green and so on.
    If the input is empty, we want to keep the background white
    */

    return (
        <>
            <h2>Ex02</h2>
            <input type='text' />
            <br />
            <div
                style={{
                    backgroundColor: 'white',
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