import React from "react";

class UserClass extends React.Component {

    render() {
        return <div className="userCard">
            <h2>Name: {this.props.name}</h2>
            <h2>Location: {this.props.location}</h2>
            <h2>Twitter: {this.props.twitter}</h2>
        </div>
    };
}

export default UserClass;
