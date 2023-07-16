import User from "./User";
import UserClass from "./UserClass";
import React from "react";

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
    }

    render() {
        return (
            <div>
                <h1>About US</h1>
                <h2>This is Namaste React webseries</h2>
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