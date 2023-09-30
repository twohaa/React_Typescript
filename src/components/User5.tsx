import React from "react";

//typing style props
type UserProps = {
    btnStyle: React.CSSProperties
};

const User = (props: UserProps) => {
    return (
        <div style={props.btnStyle}>
            <h2 style={{ border: "1px solid black" }}>User Mangement 5</h2>
        </div>
    );
};

export default User;
