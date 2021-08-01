import React from 'react';
import "../styles/OurVision.css";
import Typewriter from 'typewriter-effect';

function OurVision() {
    return (
        <div>
        <div className="ourvisioncontent">
        <h3> 
        <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString("Our Vision")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Our Mission")
                    .start();
                }}
        />
        </h3>
        <p> HealthHub is designed with the ideal of being a one stop solution for all the integral components of the 
            medical sector. Our final vision for this project is that we provide an umbrella framework for all parties of the healthcare
            ecosystem (e.g. Insurance Agencies, Doctors, Patients, Pharmaceuticals, Diagnostic Centers, etc.). By leveraging the 
            underlying transparent, scalable and secure blockchain platform we are enabling the ease of communication between
            all the mentioned agencies and enhancing the eficiency of the medical sector. </p>
        </div>

        <div className="textanimation">
            <h1> 
                <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString("We ensure Transparency.")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("We assure you Security.")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("We ensure Scalability.")
                    .pauseFor(2000)
                    .start();
                }}
                />
            </h1>
        </div>
        <div className="completetxt">
        <div className="transparency">
        <h3> Transparency </h3>
        <p> HealthHub is here to create a completely transparent ecosystem in which all patients can leverage the software to  
            eliminate red tape, increase efficiency of third party access and view all information on that network, 
            as a result creating a very secure link between the patient-doctor and the patient-third party institues. Transparency is a key 
            aspect of HealthHub.</p>
        </div>
        <div className="security">
        <h3> Security </h3>
        <p> HealthHub is based on principles of cryptography, decentralization and consensus, which ensure trust in transactions. 
            In most blockchains or distributed ledger technologies (DLT), 
            the data is structured into blocks and each block contains a transaction or bundle of transactions in which 
            all patient details will be at one place which will be easily accesible by the patient and 
            all data can be transferred from one place to another in seconds of time only after consent is given by the patient. </p>
        </div>
        <div className="scalability">
        <h3> Scalability </h3>
        <p> Scalability of the underlying blockchain network ensures that the platform 
            supports an increasing load of transactions, as well as increasing the number of nodes 
            in the network making all transactions fast,efficient and secure as well as ensuring worldwide 
            connectability and portability. </p>
        </div>
        </div>
        </div>
    )
}

export default OurVision
