import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
// import logo from "../../../assets/images/logo/Digital Coverage Logo (Full White).png";
import logo from "../../../assets/images/logo/Pakistan-Automation.png";
import ProductsDetails from "../../ProductsDetails/ProductsDetails";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { page } = useParams();

  const handleContactSection = () => {
    if (
      location.pathname === "/our-systems" ||
      location.pathname === `/request-demo/${page}`
    ) {
      // If you're on the product page, navigate to the home page and scroll to the contact section
      navigate("/");

      setTimeout(() => {
        // we dont need this condition beacuse we give use NavLink and give id in href attritube "#id"
        // This condition is used when we use Link(react-router)

        const contactSection = document.getElementById("contact");
        console.log(contactSection);
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      // If you're on the home page, scroll to the contact section directly
      //  we give href"id" in NavLink so we do no need of this condition
      // const contactSection = document.getElementById("contact");
      // if (contactSection) {
      //   contactSection.scrollIntoView({ behavior: "smooth" });
      // }
    }
  };

  const handleProductSection = () => {
    console.log(location.pathname);
    if (
      location.pathname === "/our-systems" ||
      location.pathname === `/request-demo/${page}`
    ) {
      // If you're on the product page, navigate to the home page and scroll to the contact section
      navigate("/");

      setTimeout(() => {
        // we dont need this condition beacuse we give use NavLink and give id in href attritube "#id"
        // This condition is used when we use Link(react-router)

        const productSection = document.getElementById("product");
        console.log(productSection);
        if (productSection) {
          productSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      // If you're on the home page, scroll to the contact section directly
      //  we give href"id" in NavLink so we do no need of this condition
      // const contactSection = document.getElementById("contact");
      // if (contactSection) {
      //   contactSection.scrollIntoView({ behavior: "smooth" });
      // }
    }
  };

  const handleAboutSection = () => {
    if (
      location.pathname === "/our-systems" ||
      location.pathname === `/request-demo/${page}`
    ) {
      // If you're on the product page, navigate to the home page and scroll to the contact section
      navigate("/");

      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  return (
    <div className="header-area header-area--default">
      {/* <HeaderTop /> */}
      <Navbar expand="lg" className="py-0">
        <Container fluid>
          <div className="header__logo">
            <Navbar.Brand href="/">
              <img src={logo} alt="Pakistan Automation" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-end  w-100 nav-links-container"
              navbarScroll
            >
              <Nav.Link className="hover-style-link service px-4" href="/">
                {" "}
                Home
              </Nav.Link>
              <Nav.Link
                className="hover-style-link products px-4 "
                href="#products"
                onClick={handleProductSection}
              >
                Products
                <ProductsDetails />
              </Nav.Link>
              <Nav.Link className="hover-style-link service px-4" href="">
                {" "}
                Services
                <ServiceDetails />
              </Nav.Link>
              <Nav.Link
                className="hover-style-link px-4"
                href="#about"
                onClick={handleAboutSection}
              >
                {" "}
                About Us
              </Nav.Link>
              <Nav.Link className="demo px-4" href="/our-systems">
                {" "}
                Trials & Demos
              </Nav.Link>
              <Nav.Link
                className="hover-style-link px-4"
                href="#contact"
                onClick={handleContactSection}
              >
                {" "}
                Contact Us
              </Nav.Link>
            </Nav>

            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
