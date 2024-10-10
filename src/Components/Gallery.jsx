import two from "../assets/images/venue-gallery/2.jpg"

function Gallery() {
    return (
        <section id="gallery" className="wow fadeInUp">

            <div className="container">
                <div className="section-header">
                    <h2>Gallery</h2>
                    <p>Check our gallery from the recent events</p>
                </div>
            </div>

            <div className="gallery-wrapper">
                <button className="left-btn">&#10094;</button>
                <div className="owl-carousel gallery-carousel">
                    <a href={two} className="venobox" data-gall="gallery-carousel"><img src={two} alt="" /></a>
                    <a href="./img/venue-gallery/4.jpg" className="venobox" data-gall="gallery-carousel"><img src="./img/venue-gallery/4.jpg" alt="" /></a>
                    <a href="./img/venue-gallery/5.jpg" className="venobox" data-gall="gallery-carousel"><img src="./img/venue-gallery/5.jpg" alt="" /></a>
                    <a href="./img/venue-gallery/6.jpg" className="venobox" data-gall="gallery-carousel"><img src="./img/venue-gallery/6.jpg" alt="" /></a>

                </div>
                <button className="right-btn">&#10095;</button>
            </div>

        </section>
    )
}

export default Gallery