import React from 'react';
import BannerImg from "../assets/background.jpg";
import "../styles/ContactUs.css";


function ContactUs() {
    return (
        <div className="contactus">
            <div className="leftSide" style={{ backgroundImage: `url(${BannerImg})`}}></div>
            <div className="rightSide">
                <h1> Contact Us </h1>
                <form id="contactus-form" method="POST">
                    <label htmlFor="name"> Full Name </label>
                    <input name="name" placeholder="Enter full name..." type="text" required />
                    <label htmlFor="contact"> Contact Number </label>
                    <input name="contact" placeholder="Enter your contact number..." type="text" />
                    <label htmlFor="email"> Email Address </label>
                    <input name="email" placeholder="Enter email address..." type="text" required />
                    <label htmlFor="message"> Message </label>
                    <textarea rows="5" placeholder="Enter message..." name="message" required ></textarea>
                    <button type="submit"> Send </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
