import { useState } from "react";

const User = (props) => {

    return <div className="userCard">
            <h2>Name: {props.name}</h2>
            <h2>Location: {props.location}</h2>
            <h2>Twitter: {props.twitter}</h2>
        </div>
};

export default User;