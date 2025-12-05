// import React from "react";
// import Navbar from "../../Components/NavBar/NavBar";
// import Home from "../../Components/Home/Home";
// import About from "../../Components/About/About";

// const HomeLayout = () => {
//   return (
//     <div>
//       <Navbar></Navbar>
//      <Home></Home>
//      <About></About>
//     </div>
//   );
// };

// export default HomeLayout;

import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import ScrollToNextSection from "../../Components/ScrollToNextSection/ScrollToNextSection";
import Technologies from "../../Components/Technologies/Technologies";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Qualification from "../../Components/Qualification/Qualification";
// import ScrollToNextSection from "../../Components/ScrollToNextSection";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ScrollToNextSection targetSection="about" /> {/* Scroll to the About section */}
      <About />
      <ScrollToNextSection targetSection="skills" /> {/* Scroll to the Skills section */}
      {/* Add more ScrollToNextSection components for other sections */}
      <Technologies></Technologies>
      <Skills></Skills>
      <Qualification></Qualification>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
