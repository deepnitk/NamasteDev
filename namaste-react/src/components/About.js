import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { UserContext} from "../utils/UserContext";

// const About = () => {
//     return (
//         <div>
//             <h1>About US</h1>
//             <h2>This is Namaste React webseries</h2>
//             <UserClass
//                 name={"Nandini"}
//                 twitter={"@nandini"}
//                 location={"Bangkok"}
//             />
//         </div>
//     );
// };

class About extends React.Component {

    constructor(props) {
        super(props);
        console.log('parents constructor called');
    }
    componentDidMount() {
        console.log('parents componentDidMount called');
    };

    render() {
        console.log('parents render called');
        return (
            <div>
                <h1>About US</h1>
                <h2>This is Namaste React webseries</h2>
                {/* <div>
                    loggedInUser:
                    <UserContext.Consumer>
                        {UserContext.loggedInUser}
                    </UserContext.Consumer>
                </div> */}
                <UserClass
                    name={"Nandini"}
                    twitter={"@nandini"}
                    location={"Bangkok"}
                />
            </div>
        );
    };
}

export default About;