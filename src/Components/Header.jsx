import React from "react";

function Header() {
  return (
    <>
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left float-start">
            {/* <h1>
              <a href="#main">
                C<span>o</span>nf
              </a>
            </h1> */}
            <a href="#intro" className="scrollto text-decoration-none">
              <h1 style={{ color: "white" }}>
                Adida <span>Events</span>
              </h1>
            </a>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>

            <button className="open-modal-btn" id="openModalBtn">
              Book an Event
            </button>

            <div id="bookingModal" className="modal">
              <div className="modal-content">
                <span className="close" id="closeModalBtn">
                  &times;
                </span>
                <form action="/submit-booking" method="POST">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required></input>

                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required></input>

                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required></input>

                  <label htmlFor="comments">Message</label>
                  <textarea
                    style={{ marginBottom: "20px" }}
                    id="comments"
                    name="comments"
                    rows="2"
                  ></textarea>

                  <button type="submit" className="form-btn" id="formbtn">
                    Book Event
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
