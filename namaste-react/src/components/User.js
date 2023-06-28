import { useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    return <div className="userCard">
            <h2>Count: {count}</h2>
            <h2>Count 2: {count2}</h2>
            <h2>Name: {props.name}</h2>
            <h2>Location: {props.location}</h2>
            <h2>Twitter: {props.twitter}</h2>
        </div>
};

export default User;