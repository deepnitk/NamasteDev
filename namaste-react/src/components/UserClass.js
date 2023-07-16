import React from "react";

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        const {name, location, twitter} = this.props;
        return <div className="userCard">
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Twitter: {twitter}</h2>
        </div>
    };
}


export default UserClass;
