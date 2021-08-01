import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../assets/background.jpg";
import SideImg from "../assets/bkground.png";
import "../styles/Home.css";
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div>
        <div className="home" style={{ backgroundImage: `url(${BannerImg})`}}>
            <div className="headerContainer">
                <h1> 
                <Typewriter 
                onInit={(typewriter) => {
                    typewriter.typeString("Welcome to HealthHub!").start();
                }}
                />
                </h1>
                <p>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString("A one stop solution to envisioning a reinvented medical sector by poviding efficient and accurate patient care from the comfort of your homes!").start();
                }}
                />
                </p>
                    <Link to="healthhub">
                    <button> Start Now! </button>
                    </Link>
            </div>
        </div>
        <div className="homecontent">
        <h3> Revolutionizing Paitient Care </h3>
        <p> HealthHub aims to revolutionize patient healthcare by bringing all the key stakeholders 
           of the medical sector under one umbrealla making everything very convinent not only for the 
           patient but also the whole environment as a whole. </p>
        </div>
        <div className="homecontent2">
        <div className="leftside" style={{ backgroundImage: `url(${SideImg})`}}></div>
        <div className="rightside">
        <h3> Why choose HealthHub? </h3>
        <p> - HealthHub is safe. </p>
        <p> - HealthHub is easy to use. </p>
        <p> - HealthHub is a one stop destination. </p>
        <p> - HealthHub is transparent. </p>
        <p> - HealthHub is scalable. </p>
        </div>
        </div>
        </div>
    )
}

export default Home
