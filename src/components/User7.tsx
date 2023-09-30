import React, { useState } from "react";

// onchange ,onClick event 

const User = () => {
    const [userName, setUserName] = useState("")

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }
    const handleClick = (event : React.MouseEvent<HTMLButtonElement>) =>{
        console.log(userName)
    }

    return (
        <div>
            <h2 style={{ border: "1px solid black" }}>User Mangement 7</h2>

            <input type='text' placeholder="Enter userName"
                value={userName} onChange={handleUserNameChange} />

            <button onClick={handleClick}>Show Name</button>
        </div>
    );
};

export default User;
