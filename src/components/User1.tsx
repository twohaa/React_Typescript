import React from 'react'

//User defined types : object,array,any,custom type
type UserProps = {
    lang: string[];
    obj: {
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    }
}

const User = (props: UserProps) => {
    const { lang, obj } = props
    return (
        <div>
            <h2 style={{ border: "1px solid black" }}>User Mangement 1</h2>
            <h2>{obj.name}</h2>
            <h2>{obj.age}</h2>
            {obj.isRegistered && <h2>Registered...</h2>}
            <p>
                Speaks :
                {lang.map((l, index) => {
                    return <span key={index}>{l} </span>
                })}
            </p>
        </div>
    )
}

export default User
