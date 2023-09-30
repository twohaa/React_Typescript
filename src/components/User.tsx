import React from 'react'

// Built in data type --> string,number,boolean,void,null
type UserProps = { name: string; age: number; isRegister: boolean; }

const User = (props: UserProps) => {
    const { name, age, isRegister } = props
    return (
        <div>
            <h2 style={{ border: "1px solid black" }}>User Mangement</h2>
            <h3>{name}</h3>
            <h3>{age}</h3>
            {isRegister && <h3>Registered Student</h3>}
        </div>
    )
}

export default User
