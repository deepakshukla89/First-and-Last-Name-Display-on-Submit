import React, { useState } from 'react';

const App = () => {
    const [name, setName] = useState();
    const [name1, setName1] = useState();
    const [fullName, setFullName] = useState();
    const [fullName1, setFullName1] = useState();

    const inputEvent = (event) => {
        setName(event.target.value)
    };
    const inputEvent1 = (event1) => {
        setName1(event1.target.value)
    };
    const onSubmits = (e) => {
        e.preventDefault();
        setFullName(name)
        setFullName1(name1)
    };


    return (


        <>
            <div className="addToCart">
                <form onSubmit={onSubmits}>
                    <h1 className="heading_style">Hello {fullName} {fullName1}</h1>
                    <input className="EtrName" type="text" placeholder="First Name" onChange={inputEvent} value={name} />
                    <input className="EtrName" type="text" placeholder="Last Name" onChange={inputEvent1} value={name1} />
                    <button className="button ">Click me</button>
                </form>
            </div>

        </>
    );
};

export default App;