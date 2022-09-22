import AddressMap from "./AddressMap";
import "./Contact.css";

const ContactUs = () => {
    return(
        <div>
            <div className="container">
                <div>
                    <h2>Contact Us</h2>
                    {/* <p>Swing by for a cup of coffee, or leave us a message:</p> */}
                </div>
                <div className="row">
                    <div className="column">
                        <AddressMap/>
                    </div>
                    <div className="column">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country">
                            <option value="romania">Romania</option>
                         
                        </select>
                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="How can we help you?"></textarea>
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs