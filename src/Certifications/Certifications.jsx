import React from "react";
import Nav_second from "../Nav-second";
import AllCertificates from "./AllCertificates";
import Footer from "../Footer";
import CertificateBanner from "./CertificateBanner";


function Certifications(){
    return(
        <>
        <Nav_second />
        <CertificateBanner />
        <AllCertificates />
        <Footer />
        </>
    );
}

export default Certifications;