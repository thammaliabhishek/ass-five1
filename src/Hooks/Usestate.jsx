import React, { useState } from 'react';


export default function Usestate1() {
    const [count, setCount] = useState(0);



    return (
        <>
    <div className="container">
    <h1>Higher order Components📖📖📖📖</h1>
    <h3>Higher order components are advanced technique for reusing component logic.
Basically,its a function that takes a component and returns a new component.
it is easy to handle
gets rid of copying the same logic in every component.
it makes our code more readable.</h3>


    <h2>Count:{count}</h2>
    <button className='btn btn-warning' onClick={() => { setCount(count + 1) }}>inc</button>
    <button className='btn btn-danger m-2' onClick={() => { setCount(count - 1) }}>inc</button>
    </div>
    
    <div className="container">
        <h1>Pure Components🥳🥳🥳</h1>

        <h3>Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or not.
PureComponent class are treated as pure components.
A React component is considered pure if it renders the same output for the same state and props.</h3>

    </div>
    </>


    )
}