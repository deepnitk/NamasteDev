const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" className="p-2 m-2 border border-black" placeholder="name"/>
                <input type="text" className="p-2 m-2 border border-black" placeholder="message"/>
                <button className="p-2 m-2 border border-black shadow-lg rounded-lg">Submit</button>
            </form>
            
        </div>
    );
};

export default Contact;