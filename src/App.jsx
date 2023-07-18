import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Courses from './Courses/Courses';
import Badges from './Badges/Badges';
import Footer from './Footer';
import Certifications from './Certifications/Certifications';
import Academics from './Academics/Academics';
import Class_10 from './Class-10/Class-10';
import Class_12 from './Class-12/Class-12';
import PageNotFound from './404PageNotFound/PageNotFound';


const App = () => {
  return (
    <BrowserRouter>     
        <Routes>
          <Route path = "/" element = {<><Home /><Footer /></>} />
          <Route path = "Badges" element = {<><Badges /></>} />     
          <Route path='Academics' element = {<><Academics /></>}/>
          <Route path='Class-10' element = {<><Class_10 /></>}/>
          <Route path='Class-12' element = {<><Class_12 /></>}/>
          <Route path='Certifications' element = {<Certifications />}/>
          <Route path='Courses' element = {<><Courses /></>}/>
          <Route path='*' element = {<><PageNotFound /></>}/>
         
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
