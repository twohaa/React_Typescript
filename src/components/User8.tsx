import React, { useState } from "react";

//form event

const User = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = { name, email }
        console.log(newUser)
    }


    return (
        <div>
            <h2 style={{ border: "1px solid black" }}>User Mangement 8</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type='text' id='name' value={name}
                        onChange={handleNameChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='email' id='email' value={email}
                        onChange={handleEmailChange} required />
                </div>
                <button>Create User</button>
            </form>
            <br />
            <hr />
        </div>
    );
};

export default User;

