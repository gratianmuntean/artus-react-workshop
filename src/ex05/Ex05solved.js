import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const NestedButton = ({ theme, toggleTheme }) => {
    return (
        <>
            <div className="styleContainer" style={theme}>Nested Box</div>
            <button onClick={toggleTheme} type='button'>Nested Toggle theme</button>
        </>
    )
}

const Ex05Solved = () => {
    const { theme, toggleTheme } = useContext(AppContext);
    // Let's use react context in order to toggle the theme of our application
    // Use the theme and the toggle handler in order to change the theme of our application,
    // therefor the style of the boxes in the layout.
    return (
        <>
            <h2>Ex05</h2>
            <div className="styleContainer" style={theme}>Box 1</div>
            <div className="styleContainer" style={theme}>Box 2</div>
            <button onClick={toggleTheme} type='button'>Toggle theme</button>
            <NestedButton theme={theme} toggleTheme={toggleTheme} />
        </>
    );
}

export default Ex05Solved;
