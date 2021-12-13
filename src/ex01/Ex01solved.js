import React from "react";

const Ex01 = () => {
    const callMe = () => {
        console.log('Hi!');
    }

    return (
        <div>
            <h1>Exercise 01 Solved</h1>
            <CustomButton onClick={callMe} />
        </div>
    );
}


const CustomButton = (props) => {
    return (
        <button style={{ cursor: 'pointer', backgroundColor: 'blue' }} onClick={props.onClick}>
            Click Me
        </button>
    )
}

export default Ex01
