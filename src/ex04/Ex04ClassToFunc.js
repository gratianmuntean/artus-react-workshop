import React, { useState, useEffect } from 'react';

const Ex04Class = ({ surname }) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Nameee');

  useEffect(() => {
    console.log('on component mount');
  }, [])

  useEffect(() => {
    console.log('new counter', counter);
  }, [counter])

  const onClickHandler = () => {
    setCounter(counter + 1);
  }

  return (
    <React.Fragment>
      <h1>Heading 1</h1>
      <div>
        <p>Hello, {name} | {surname}</p>
        <button type='button' onClick={onClickHandler}>Increase</button>
        <div>{counter}</div>
      </div>
    </React.Fragment>
  )
}

export default Ex04Class;