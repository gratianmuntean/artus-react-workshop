import React from "react";

const Ex01 = () => {
    return (
        <div>
            <h1>Exercise 01 Solved</h1>
            <CustomButton />
        </div>
    );
}


const CustomButton = () => {
    return (
        <button style={{ cursor: 'pointer' }}>
            Click Me
        </button>
    )
}

export default Ex01
