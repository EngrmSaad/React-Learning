// import Brands from "./pages/Brands/Brands";
import { Routes, Route } from "react-router-dom";
import AllPages from "./pages";
// import ITServices from "./pages/Services/components/ITServices/ITServices";
// import OEEServices from "./pages/Services/components/OEEServices/OEEServices";
// import AutomationServices from "./pages/Services/components/AutomationServices/AutomationServices";
// import DigitalServices from "./pages/Services/components/DigitalServices/DigitalServices";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import Demo from "./pages/Demos/Demo";
import SystemDetails from "./pages/SystemsDetails/SystemDetails";

function App() {
  useEffect(() => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="our-systems" element={ <Demo />}/>
        {/* <Route path="it-services" element={<ITServices />} /> */}
        {/* <Route path="oee-services" element={<OEEServices />} /> */}
        {/* <Route path="automation-services" element={<AutomationServices />} /> */}
        {/* <Route path="digital-services" element={<DigitalServices />} /> */}
        <Route path="/request-demo/:page" element={<SystemDetails />} />
      </Routes>

      {/* Brands start ========================>  */}
      {/* <Brands /> */}
      {/* Brands end ========================> */}

      {/* footer start =====================>*/}
      {/* <Footer /> */}
      {/* footer end  =====================>*/}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
