// import { AdditionalServices } from "../components/AdditionalServices/AdditionalServices";
import {
  //  AdditionalServices,
  Technologies,
} from "../components/Technologies/Technologies";
import NavBar from "../components/Header/NavBar/NavBar";
import OurProducts from "../components/OurProducts/OurProducts";
// import { VedioSection } from "../components/Vedio/VedioSection";
// import About from "./About/About";
import Contact from "./Contact/Contact";
// import MainPage from "./MainPage/MainPage";
import Projects from "./Projects/Projects";
import Banner from "./Banner/Banner";
import Footer from "../components/Footer/Footer";
// import  Technology  from "../components/Technologies/Technology";

function AllPages() {
  return (
    <>
      {/* Header */}
      <NavBar />
      {/* Main Page */}
      <div className="" style={{ marginTop: "6rem" }}>
        {/* main-page start ========================> */}

        <Banner />
        {/* main-page end ========================> */}

        {/* Projects wrapper Start =============*/}
        <Projects />

        {/* <OurPoducts /> section */}
        <OurProducts />
        {/* <OurProducts /> section */}
        {/* closed */}

        {/* Technologies section */}
        <Technologies />
        {/* Technologies section */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default AllPages;
