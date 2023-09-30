import React from "react";

//User defined types : arrayOfObject
type UserProps = {
  arrOfObj: {
    id: number,
    namee: string,
    email: string,
    age: number,
  }[],
};

const User = (props: UserProps) => {
  const { arrOfObj } = props;
  return (
    <div>
      <h2 style={{ border: "1px solid black" }}>User Mangement 2</h2>
      {arrOfObj.map((user) => {
        const { id, namee, email, age } = user
        return <section key={id}>
          <h2>{id}</h2>
          <h2>{namee}</h2>
          <h2>{age}</h2>
          <h2>{email}</h2>
        </section>
      })}
    </div>
  );
};

export default User;
