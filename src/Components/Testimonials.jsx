function Testimonials() {
    return (
        <section id="testimonials" className="section-with-bg wow fadeInUp">
            <div className="section-header">
                <h2>Testimonials</h2>
            </div>

            <div className="testimonial-wrapper">
                <button className="left-btn">&#10094;</button>
                <div className="testimonial-carousel owl-carousel">
                    <div className="testimonial">
                        <p>"Adida events thank you for making my event wonderful. Happy to connect !"</p>
                        <h4>– Rachna Maheshwari</h4>
                    </div>
                    <div className="testimonial">
                        <p>"Superb people, great service and huge satisfaction."</p>
                        <h4>– Gagan Budhiraja</h4>
                    </div>
                    <div className="testimonial">
                        <p>"One stop solution for all events related needs."</p>
                        <h4>– Kanika Maheshwari</h4>
                    </div>
                </div>
                <button className="right-btn">&#10095;</button>
            </div>
        </section>
    )
}

export default Testimonials