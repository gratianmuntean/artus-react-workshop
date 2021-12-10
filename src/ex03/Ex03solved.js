import React from "react";

const Ex03solved = () => {
    const names = ['Mario', 'Jason', 'Joe', 'Joanna'];

    return (
        <>
            <h2>Ex03 solved</h2>
            <ul>
                {names?.map((name, i) => {
                    return (
                        <li key={i}>{name}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default Ex03solved;