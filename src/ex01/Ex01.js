import React from "react";

const Ex01 = () => {
    /*
        Welcome to the first exercise :)
        We'll start off with something light to get warmed up.

        1. Create a function inside of this component named 'callMe'
            It will just have a console log inside;
        2. Pass it as a prop to CustomButton so that the button will call
            this function when clicked
        3. Give the button a background-color of blue using inline styles
        Docs links: 
        https://medium.com/@francesca.dreith/how-to-pass-information-from-a-child-component-the-parent-component-in-react-db1cf9d012d0 
        
     */

    return (
        <div>
            <h1>Exercise 01</h1>
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

export default Ex01;