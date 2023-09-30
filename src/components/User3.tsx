import React from "react";

//User defined types : union
type UserProps = {
    status: 'loading' | 'error' | 'success';
};

const User = (props: UserProps) => {
    const { status } = props;
    if (status === "loading") {
        return <h2>Data is Loading....</h2>
    }
    else if (status === "error") {
        return <h2>Data fetch Error...</h2>
    }
    return (
        <div>
            <h2 style={{ border: "1px solid black" }}>User Mangement 3</h2>
            <h2>Data fetched successfully...</h2>
        </div>
    );
};

export default User;
