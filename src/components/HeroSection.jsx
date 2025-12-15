import React from "react";
import "../assets/css/styles.css"

function Hero() {
  return (
    <>
        <section className="hero">
            <div className="dack">
                <div className="container hero-content">
                    <h1 className="hero-title">Global Shipping & <br /><span>Logistics Solutions</span></h1>
                    <p className="hero-parag">Comprehensive shipping and logistics services. We handle everything from small packages to large freight, ensuring efficient deliveryworldwide.</p>
                    <div className="actions">
                    <button className="btn primary">Track Package</button>
                    <button className="btn">Get a Quote</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="stats">
            <div style={{backgroundColor:"#22120cff", padding:"10px"}}>
                <p>Special Offer: 20% off on international shipping! | Fast & Reliable Worldwide Delivery | Track your packages in real-time | 24/7 Customer Support</p>
            </div>
            <div className="info">
                <div><h3>150+</h3><p>Countries Served</p></div>
                <div><h3>19+</h3><p>Years Experience</p></div>
                <div><h3>1M+</h3><p>Packages Delivered</p></div>
                <div><h3>98%</h3><p>Customer Satisfaction</p></div>
            </div>
        </section>
    </>
  );
}

export default Hero