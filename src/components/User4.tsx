import React from "react";
import Post from "./User4/Post";


//typing children props
type UserProps = {
    children : React.ReactNode
};

const User = (props: UserProps) => {
    return (
        <div>
            <h2 style={{ border: "1px solid black" }}>User Mangement 4</h2>
            <Post />
            <button>{props.children}</button>
        </div>
    );
};

export default User;
