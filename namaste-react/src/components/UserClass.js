import React from "react";

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy User",
                location: "default",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/deepnitk");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate called!!!');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount called!!!');
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return <div className="userCard">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
        </div>
    };
}


export default UserClass;

/*
    --> Mounting phase
        -- Costructor is called. setState is done with dummy data.
        -- Render happened with dummy data.
            <html Dummy>
        -- ComponentDidMount is called
            -- API Call
            -- this.setState
    
    --> Updating phase
        -- render with API data.
        -- <HTML updates with API data>
        -- componentDidUpdate is called.

    --> Unmounting phase
        -- unmounting is done.
*/
