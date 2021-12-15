import React, { useEffect, useState } from "react";

const Ex04solved = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();
    }

    useEffect(() => {
        fetchUsers().then(data => setUsers(data));
    }, [])

    return (
        <>
            <h2>Ex04solved</h2>
            <ul>
                {users?.map((user, index) => {
                    return (
                        <li key={index}>
                            <span>{user?.name} | </span>
                            <span>{user?.email}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Ex04solved;