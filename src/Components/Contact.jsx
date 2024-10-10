import { FaMapMarkerAlt, FaPhoneAlt, FaInbox } from "react-icons/fa";
function Contact() {
    return (
        <section id="contact" className="section-bg wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Contact Us</h2>
                </div>

                <div className="row contact-info">
                    <div className="col-md-4">
                        <FaMapMarkerAlt />
                        <div className="contact-address">
                            <address>1/6979 street no -2 Shivaji Park shahdara Delhi-110032</address>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <FaPhoneAlt />
                        <div className="contact-phone">
                            <p><a href="tel:8800123421">8800123421</a></p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <FaInbox />
                        <div className="contact-email">
                            <p><a href="mailto:adidaevents@gmail.com">adidaevents@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                <div className="form">
                    <div id="sendmessage" style={{ display: "none" }}>Your message has been sent. Thank you!</div>
                    <div id="errormessage" style={{ display: "none" }}>Please fill in the required fields correctly.</div>

                    <form action="" method="post" role="form" className="contactForm" id="contactForm">
                        <div className="row">
                            <div className="col">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                <div className="validation" style={{ display: "none", color: "red" }}>Please enter your name.</div>
                            </div>
                            <div className="col">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                <div className="validation" style={{ display: "none", color: "red" }}>Please enter your name.</div>
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                            <div className="validation" style={{ display: "none", color: "red" }}>Please enter a subject.</div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" id="message" placeholder="Message"></textarea>
                            <div className="validation" style={{ display: "none", color: "red" }}>Please enter a message.</div>
                        </div>
                        <div className="text-center">
                            <button type="submit" id="submitBtn">Send Message</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact