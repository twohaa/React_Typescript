import React, { useState } from "react";

//useState hooks
type Userr = {
    id: number,
    name: string
};

const User = () => {
    const [count, setCount] = useState<number>(0)
    // const [user, setUser] = useState<null | Userr>(null)
    const [user, setUser] = useState<Userr>({} as Userr)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleUser = () => {
        setUser({ id: 1, name: "twoha" })
    }

    return (
        <div>
            <h2 style={{ border: "1px solid black" }}>User Mangement 6</h2>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <br />
            <button onClick={handleUser}>Add User</button>
            <p>{user.name}</p>
        </div>
    );
};

export default User;
