import React from 'react';
import "../styles/Footer.css";
import InstagramAman from "@material-ui/icons/Instagram";
import InstagramLokesh from "@material-ui/icons/Instagram";
import LinkedInAman from "@material-ui/icons/LinkedIn";
import LinkedInLokesh from "@material-ui/icons/LinkedIn";
import GithubAman from "@material-ui/icons/GitHub";
import GithubLokesh from "@material-ui/icons/GitHub";

function Footer() {
    return (
        <div className="footer">
            <div className="AmansocialMedia">
                <p> Connect with Aman Anand </p>
                <GithubAman /> <LinkedInAman /> <InstagramAman /> 
            </div>
            <div className="LokeshsocialMedia">
                <p> Connect with Lokesh Mishra </p>
                <GithubLokesh /> <LinkedInLokesh /> <InstagramLokesh />
            </div>
            <div>
                <p> Copyright &copy; 2021 HealthHub All Rights Reserved </p>
                </div>
            
        </div>
    );
}

export default Footer
