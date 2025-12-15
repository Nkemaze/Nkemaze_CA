import React from "react";
import "../assets/css/styles.css"
import img1 from "../assets/images/hero_image.jpeg"
import img2 from "../assets/images/quality.png"
import img3 from "../assets/images/full.png"
import img4 from "../assets/images/expert.png"
import com1 from "../assets/icons/Component 1(1).svg"
import com2 from "../assets/icons/Component 1(2).svg"
import com3 from "../assets/icons/Component 1(3).svg"
import com4 from "../assets/icons/Component 1(4).svg"

function Features() {
  return (
      <section className="features">
        <div className="card">
            <div className="img">
                <img src={img1} alt="" />
            </div>
            <div className="icons">
                <img className="icons" src={com1} alt="" style={{height:"20px", width:"20px",display:"flex",paddingTop:"10px"}} />
            </div>
            <div className="texts">
                <h3>GLOBAL NETWORK</h3>
                <p>With over 19 years of <br />experience, we connect <br />businesses and individuals <br />across 150+ countries with <br />reliable shipping solutions.</p>
            </div>
        </div>
        <div className="card">
            <div className="img">
                <img src={img2} alt="" />
            </div>
            <div className="icons">
                <img className="icons" src={com2} alt="" style={{height:"20px", width:"20px",display:"flex",paddingTop:"10px"}} />
            </div>
            <div className="texts">
                <h3>QUALITY ASSURANCE</h3>
                <p>We prioritize the safe and timely <br />delivery of every shipment, <br />maintaining the highest <br />standards of service quality.</p>
            </div>
        </div>
        <div className="card">
            <div className="img">
                <img src={img3} alt="" />
            </div>
            <div className="icons">
                <img className="icons" src={com3} alt="" style={{height:"20px", width:"20px",display:"flex",paddingTop:"10px"}} />
            </div>
            <div className="texts">
                <h3>FULL-SERVICE SUPPORT</h3>
                <p>From customs clearance to last- <br />mile delivery, we manage every <br />aspect of your shipment with <br />precision and care.</p>
            </div>
        </div>
        <div className="card">
            <div className="img">
                <img src={img4} alt="" />
            </div>
            <div className="icons">
                <img className="icons" src={com4} alt="" style={{height:"20px", width:"20px",display:"flex",paddingTop:"10px"}} />
            </div>
            <div className="texts">
                <h3>EXPERT TEAM</h3>
                <p>Our dedicated professionals <br />bring years of logistics expertise <br />to ensure smooth and efficient <br />shipping operations.</p>
            </div>
        </div>
    </section>
  );
}

export default Features