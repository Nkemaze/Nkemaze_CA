import React from "react";
import "../assets/css/styles.css"
import Header from "../components/Header"
import Hero from "../components/HeroSection"
import Features from "../components/FeatureSection";
import Footer from "../components/Footer";

import com1 from "../assets/icons/Component 1(1).svg"
import com2 from "../assets/icons/Component 1(2).svg"
import com3 from "../assets/icons/Component 1(3).svg"
import com4 from "../assets/icons/Component 1(4).svg"

function Home() {
  return (
    <div className="font-sans text-gray-800">
        <Header />
        <Hero />
        <Features />

        <section className="services">
            <div className="sevice-title">
                <h2>Our Services</h2>
                <p>Comprehensive logistics solutions for all your shipping needs</p>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="icons">
                        <img className="icons" src={com1} alt="" style={{height:"20px", width:"20px",display:"flex",paddingTop:"10px"}} />
                    </div>
                    <div className="texts">
                        <h3>GLOBAL NETWORK</h3>
                        <p>With over 19 years of <br />experience, we connect <br />businesses and individuals <br />across 150+ countries with <br />reliable shipping solutions.</p>
                    </div>
                    <div className="link">
                        <a href="/">Lear More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="icons">
                        <img className="icons" src={com2} alt="" style={{height:"20px", width:"20px",display:"flex",paddingTop:"10px"}} />
                    </div>
                    <div className="texts">
                        <h3>QUALITY ASSURANCE</h3>
                        <p>We prioritize the safe and timely <br />delivery of every shipment, <br />maintaining the highest <br />standards of service quality.</p>
                    </div>
                    <div className="link">
                        <a href="/">Lear More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="icons">
                        <img className="icons" src={com3} alt="" style={{height:"20px", width:"20px",display:"flex",paddingTop:"10px"}} />
                    </div>
                    <div className="texts">
                        <h3>FULL-SERVICE SUPPORT</h3>
                        <p>From customs clearance to last- <br />mile delivery, we manage every <br />aspect of your shipment with <br />precision and care.</p>
                    </div>
                    <div className="link">
                        <a href="/">Lear More</a>
                    </div>
                </div>
                <div className="card">
                    <div className="icons">
                        <img className="icons" src={com4} alt="" style={{height:"20px", width:"20px",display:"flex",paddingTop:"10px"}} />
                    </div>
                    <div className="texts">
                        <h3>EXPERT TEAM</h3>
                        <p>Our dedicated professionals <br />bring years of logistics expertise <br />to ensure smooth and efficient <br />shipping operations.</p>
                    </div>
                    <div className="link">
                        <a href="/">Lear More</a>
                    </div>
                </div>
            </div>
        </section>

      {/* Why Choose Us */}
      {/* <section className="why container">
        <h2>Why Choose Us</h2>
        <div className="grid-4">
          <div className="card">Global Network</div>
          <div className="card">Secure Shipping</div>
          <div className="card">24/7 Support</div>
          <div className="card">Real-time Tracking</div>
        </div>
      </section> */}

      {/* How It Works */}
      {/* <section className="how">
        <h2>How It Works</h2>
        <div className="container grid-4">
          <div className="step">Request Quote</div>
          <div className="step">Book Shipment</div>
          <div className="step">Package Pickup</div>
          <div className="step">Fast Delivery</div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="testimonials container">
        <h2>What Our Clients Say</h2>
        <div className="grid-3">
          <div className="card">"Excellent service!"</div>
          <div className="card">"Fast and reliable."</div>
          <div className="card">"Highly recommended."</div>
        </div>
      </section> */}

        <Footer />
    </div>
  );
}

export default Home