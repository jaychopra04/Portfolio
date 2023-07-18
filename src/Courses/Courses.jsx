import React from "react";
import Nav_second from "../Nav-second";
import CourseBanner from "./CourseBanner";
import Footer from "../Footer";
import AllCourses from "./AllCourses";

function Courses(){
    return (
        <div>
            <Nav_second />
            <CourseBanner />
            <AllCourses />
            <Footer />
        </div>
            
    );
}

export default Courses;