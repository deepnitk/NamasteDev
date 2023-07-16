import React from "react";

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log('child constructor is called')
    }

    componentDidMount() {
        console.log('child component coponentDidmount called');
    }

    render() {
        console.log('render method is called');
        const {name, location, twitter} = this.props;
        const {count, count2} = this.state;
        return <div className="userCard">
            <h2>Count: {this.state.count}</h2>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Twitter: {twitter}</h2>
            <button onClick={()=> {
                this.setState({
                    count: this.state.count + 1
                });
            }}>+</button>
        </div>
    };
}

export default UserClass;
