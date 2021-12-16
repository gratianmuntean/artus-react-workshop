import React, { useState, useEffect } from "react";

import Ex04Class from './Ex04Class';

const Ex04 = () => {
    /*
    Let's fetch some random data and display it in our component
    We'll use this mock api endpoint https://jsonplaceholder.typicode.com/users
    It retrieves a list of mock users. We want to do a basic get request as soon
    as the page loads up, and display each user's name and email in a <li></li>
    Doc links: 
    https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
    */

    return (
        <>
            <h2>Ex04</h2>
            <Ex04Class surname='Surname' />
            <ul>
                {/* here you have to render the users */}
            </ul>
        </>
    );
}

export default Ex04;