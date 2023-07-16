import { useEffect, useState } from "react";

const User = (props) => {

    useEffect(() => {
        const timer = setInterval(() =>{
            console.log("Sab Moh Maya hai!"); 
        }, 1000);

        // this function gets called when you unmount from this component
        return () => {
            clearInterval(timer);
        }
    });

    return <div className="userCard">
            <h2>Name: {props.name}</h2>
            <h2>Location: {props.location}</h2>
            <h2>Twitter: {props.twitter}</h2>
        </div>
};

export default User;