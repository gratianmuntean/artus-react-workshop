import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const NestedButton = () => {
    return (
        <>
            <div className="styleContainer">Nested Box</div>
            <button type='button'>Nested Toggle theme</button>
        </>
    )
}

const Ex05 = () => {
    // Let's use react context in order to toggle the theme of our application
    // Use the theme and the toggle handler in order to change the theme of our application,
    // therefor the style of the boxes in the layout.
    return (
        <>
            <h2>Ex05</h2>
            <div className="styleContainer">Box 1</div>
            <div className="styleContainer">Box 2</div>
            <button type='button'>Toggle theme</button>
            <NestedButton />
        </>
    );
}

export default Ex05;