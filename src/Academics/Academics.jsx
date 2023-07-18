import React from "react";
import Nav_second from "../Nav-second";
import AcademicBanner from "./AcademicBanner";
import AcademicContent from "./AcademicComponent";
import Footer from "../Footer";
import MiscellaneousBanner from "./MiscellaneousBanner";
import VirtualExperience from "./VirtualExperience";
import Class12 from "./Class12";
import Class10 from "./Class10";

function Academics(){
    return (
        <div>
            <Nav_second />
            <AcademicBanner />
            <Class10 />
            <Class12 />
            <AcademicContent />
            <MiscellaneousBanner />
            <VirtualExperience />
            <Footer />
        </div>
    );
}

export default Academics;