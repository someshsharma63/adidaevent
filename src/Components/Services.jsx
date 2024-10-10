import React from 'react'
import cevents from "../assets/images/cevents.jpg"

function Services() {
    return (
        <section id="services">
            <div className="section-header">
                <h2>Our Services</h2></div>
            <div className="service-container">
                <div className="service">
                    <img src={cevents} alt="img" />
                    <h3>Corporate events</h3>
                    <p>Adida Events delivers top-notch corporate events tailored to your needs, from impactful conferences to dynamic team-building activities. Let us handle the details, ensuring a seamless and memorable experience for your team.</p>
                    <button className="services-btn open-modal-btn" id="servicesBtn">Book Now</button>
                </div>

                <div className="service">
                    <img src="weddingmeal.jpg" alt="img" />
                    <h3>Wedding meal</h3>
                    <p>Enjoy a delicious wedding meal with Adida Events, where every dish is meticulously prepared. Our menu delights guests and makes your celebration truly special and memorable.</p>
                    <button className="services-btn open-modal-btn" id="servicesBtn">Book Now</button>
                </div>

                <div className="service">
                    <img src="birthdayparty.jpg" alt="img" />
                    <h3>Birthday parties</h3>
                    <p>Celebrate your birthday with Adida Events. We turn your party into a fun and memorable occasion with vibrant setups and tailored events that all your guests will enjoy.</p>
                    <button className="services-btn open-modal-btn" id="servicesBtn">Book Now</button>
                </div>

                <div className="service">
                    <img src="barservice.jpg" alt="img" />
                    <h3>Bar service</h3>
                    <p>Enhance your event with Adida Events' bar services. Our expert bartenders craft custom cocktails and serve a variety of beverages, ensuring an exceptional drinking experience.</p>
                    <button className="services-btn open-modal-btn" id="servicesBtn">Book Now</button>
                </div>

                <div className="service">
                    <img src="drop.jpg" alt="img" />
                    <h3>Drop off catering</h3>
                    <p>Enjoy top-quality meals with Adida Events' drop-off catering. We deliver expertly prepared food to your location, making your event smooth and delightful.</p>
                    <button className="services-btn open-modal-btn" id="servicesBtn">Book Now</button>
                </div>

                <div className="service">
                    <img src="staff.jpg" alt="img" />
                    <h3>Staff services</h3>
                    <p>Receive exceptional service with Adida Events' staff. Our trained professionals ensure your event runs seamlessly, offering attentive and courteous support for all your needs.</p>
                    <button className="services-btn open-modal-btn" id="servicesBtn">Book Now</button>
                    {/* <button className="services-btn" id="servicesBtn">book now</button> */}
                </div>
                <div className="service">
                    <img src="Exhibitions.png" alt="img" />
                    <h3>Exhibitions</h3>
                    <p>Adida Events Exhibition service guarantees a flawless event. We handle everything, from setup to breakdown, ensuring your exhibition leaves a lasting impact on every attendee.</p>
                    <button className="services-btn open-modal-btn" id="servicesBtn">Book Now</button>
                    {/* <button className="services-btn" id="servicesBtn">book now/button> */}
                </div>
                <div className="service">
                    <img src="Trousseau.jpg" alt="img" />
                    <h3>Trousseau Packing</h3>
                    <p>Adida Events offers exquisite Trousseau packing services, turning your cherished items into beautifully crafted presentations.</p>
                    <button className="services-btn open-modal-btn" id="servicesBtn">Book Now</button>
                    {/* <button className="services-btn" id="servicesBtn">book now/button> */}
                </div>
            </div>
        </section>
    )
}

export default Services