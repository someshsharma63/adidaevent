import React from 'react'

function Footer() {
  return (
   <div>

   
      <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-info" >
          {/* {{margin: -12px 0px 10px 0px}} */}
            <h2 style={{color: "white"}}>ADIDA <span style={{color:"#f82249"}}>EVENTS</span></h2>
            <p>Adida Events is a premier event management company dedicated to creating unforgettable experiences. Specializing in both corporate and personal events, we bring a unique blend of creativity, professionalism, and meticulous attention to detail to every project.</p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fa fa-angle-right"></i> <a href="#about">About us</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#services">Services</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#gallery">Gallery</a></li>
              <li><i className="fa fa-angle-right"></i> <a  href="#" id="bookevent" > Book Event</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fa fa-angle-right"></i> <a href="Terms-of-service.html" target="_blank">Terms of service</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="Privacy_policy.html" target="_blank">Privacy policy</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#contact"> Contact us</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#testimonials">Testimonials </a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              1/6979 street no -2 Shivaji Park shahdara Delhi-110032 <br/>
              <strong>Phone:</strong>  8800123421<br/>
              <strong>Email:</strong> adidaevents@gmail.com<br/>
            </p>

            <div className="social-links">
              
              <a href="https://www.facebook.com/" target="_blank" className="facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/adidaevents?igsh=MTFldmVzOWVvM24yMg%3D%3D" target="_blank" className="instagram"><i className="fa-brands fa-instagram"></i></a>
              
              
            </div>

          </div>

        </div>
      </div>
    </div>


         {/* <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>  */}

          

    <div className="container">
      <div className="copyright">
        <strong>Adida Events</strong> Pvt. Ltd. @2024. All rights reserved.
      </div>
       {/* <div className="credits">
        
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=TheEvent
        
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>  */}
    </div>
  </footer>

  </div>
  )
}

export default Footer