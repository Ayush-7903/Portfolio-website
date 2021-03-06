import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from "./components/testimonials/Testimonials"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Experience from "./components/experience/Experience"

const App = () => {
return (
<>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services/>
    <Portfolio />
    <Contact/>
    <Testimonials/>
    <Footer/>
    </>
    //eslint-disable-next-line


);
};


export default App
