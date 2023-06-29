import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About US</h1>
            <h2>This is Namaste React webseries</h2>
            {/* <User
                name={"Ratnadeep"}
                twitter={"@ratnadek"}
                location={"Pune"}
            /> */}
            <UserClass
                name={"Nandini"}
                twitter={"@nandini"}
                location={"Bangkok"}
            />
        </div>
    );
};

export default About;