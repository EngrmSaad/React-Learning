import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Link, useNavigate } from "react-router-dom";

const ProductsDetails = () => {
  const products = [
    {
      id: 2,
      productName: "Autonomous Maintenance",
      iconRight: <i className="fas fa-chevron-right icon-right "></i>,
      iconLeft: <i className="fas fa-chevron-left icon-left mt-2 "></i>,
      productsList: [
        [
          "Defect Handling System",
          "A system to track and manage defects in products or processes.",
          "Improved product quality and faster defect resolution, leading to higher customer satisfaction.",
        ],
        [
          "5s Audit System",
          "An audit system to monitor and improve adherence to workspace organization and cleanliness standards.",
          " A more efficient and organized workplace, reducing waste and enhancing productivity.",
        ],
        [
          "Machine Clean Inspect And Lubrication Tracking System (CIL)",
          "A system to schedule and manage machine maintenance activities.",
          "Increased machine reliability, minimized downtime, and extended equipment lifespan.",
        ],
        [
          "Machine Centerline Tracking System",
          "A system to maintain optimal settings and conditions for machines.",
          "Consistent machine performance and reduced variation in output quality.",
        ],
      ],
      boxDetails:
        "Gain Complete Asset Control, Enhance Utilization, And Eliminate Ghost Assets With Our Dashboard-Driven Asset Registration And Management System.",
    },
    {
      id: 1,
      productName: "Asset Management",
      iconRight: <i className="fas fa-chevron-right icon-right "></i>,
      iconLeft: <i className="fas fa-chevron-left icon-left mt-2 "></i>,
      productsList: [
        [
          "Asset Management System",
          "A system to track and manage all organizational assets.",
          "Better asset utilization, reduced losses, and improved resource allocation.",
        ],
        [
          "IT Help Desk & Asset Managemnt System",
          "A system to manage IT assets and provide support through a help desk.",
          "Efficient IT operations, reduced downtime, and improved user support.",
        ],
      ],
      boxDetails:
        "Gain Complete Asset Control, Enhance Utilization, And Eliminate Ghost Assets With Our Dashboard-Driven Asset Registration And Management System.",
    },

    {
      id: 3,
      productName: "Shop Floor digitization",
      iconRight: <i className="fas fa-chevron-right icon-right "></i>,
      iconLeft: <i className="fas fa-chevron-left icon-left mt-2 "></i>,
      productsList: [
        [
          "Overall Equipment Effectiveness (OEE)",
          "A metric and system to measure and optimize manufacturing equipment efficiency.",
          "Enhanced equipment productivity, reduced waste, and increased profitability.",
        ],
      ],
      boxDetails:
        "Enhance Production Efficiency By Achieving Consistency, Optimizing Processes, Reducing Waste, Minimizing Downtime, And Fostering Accountability On The Factory Floor.",
    },
    {
      id: 4,
      productName: "Trigger System",
      iconRight: <i className="fas fa-chevron-right icon-right "></i>,
      iconLeft: <i className="fas fa-chevron-left icon-left mt-2 "></i>,
      productsList: [
        [
          "Quality And Safety Feedback System (OFS)",
          "A system to collect and manage feedback on quality and safety issues.",
          "Enhanced product quality, improved safety practices, and a better understanding of customer needs.",
        ],
        [
          "Quality And Safety Behavior observation System (BOS)",
          "A system to observe and track employee behaviors related to quality and safety.",
          "A safer work environment, improved quality control, and a culture of continuous improvement.",
        ],
      ],
      boxDetails:
        "Establish Quality & Safety Feedback And Behavior Observation Systems To Cultivate A Culture Of Continuous Improvement.",
    },
    {
      id: 5,
      productName: "Meeting DMS Digitization",
      iconRight: <i className="fas fa-chevron-right icon-right "></i>,
      iconLeft: <i className="fas fa-chevron-left icon-left mt-2 "></i>,
      productsList: [
        [
          "DDS System",
          "A Daily Direction Setting (DDS) is a structured approach to aligning daily operations and priorities. It's a crucial component of lean manufacturing, applicable to businesses of all sizes and industries.",
          "Help to improve productivity & Quality, Reduced costs and lead times and Improved communication and collaboration.",
        ],
      ],

      boxDetails:
        "Effortlessly Shift To A Paperless Department Board, Enabling Remote Access, Streamlined Communication, And Improved Visibility Of Departmental KPIs.",
    },
  ];

  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoveredSubProduct, setHoveredSubProduct] = useState(null);
  const [bigBoxContent, setBigBoxContent] = useState(null);
  const [route, setRoute] = useState("");
  // console.log(route);

  const handleMouseOver = (productId) => {
    setHoveredProduct(productId);
    setBigBoxContent(
      products.find((prod) => prod.id === productId)?.boxDetails
    );
  };

  const handleMouseOut = () => {
    setHoveredProduct(null);
  };

  const handleSubProductMouseOver = (productIdx) => {
    // console.log(productIdx);
    setHoveredSubProduct(productIdx);
  };

  const handleSubProductMouseOut = () => {
    setHoveredSubProduct(null);
  };

  const handleClick = (e) => {
    const clickedValue = e.target.innerHTML;
    // console.log(clickedValue);
    switch (clickedValue) {
      case "Defect Handling System":
        setRoute("/request-demo/defecthandling");
        break;
      case "5s Audit System":
        setRoute("/request-demo/5saudit");
        break;
      case "Machine Clean Inspect And Lubrication Tracking System (CIL)":
        setRoute("/request-demo/cil");
        break;
      case "Machine Centerline Tracking System":
        setRoute("/request-demo/centerline");
        break;
      case "Asset Management System":
        setRoute("/request-demo/assetmanagement");
        break;
      case "IT Help Desk & Asset Managemnt System":
        setRoute("/request-demo/assetmanagement");
        break;
      case "Overall Equipment Effectiveness (OEE)":
        setRoute("/request-demo/oee");
        break;
      case "Quality And Safety Feedback System (OFS)":
        setRoute("/request-demo/ofs");
        break;
      case "Quality And Safety Behavior observation System (BOS)":
        setRoute("/request-demo/bos");
        break;
      case "DDS System":
        setRoute("/request-demo/dds");
        break;

      default:
        console.log('Default');
        setRoute("");
    }
  };
  useEffect(() => {
    if (route) {
      // Navigate when the route state has been updated
      navigate(route);
    }
  }, [route, navigate]);

  // Function to get the box content for the currently hovered product and sub-product
  const getBoxContent = () => {
    if (hoveredProduct !== null && hoveredSubProduct !== null) {
      const product = products.find((prod) => prod.id === hoveredProduct);
      if (product) {
        const subProduct = product.productsList[hoveredSubProduct];
        if (subProduct) {
          return subProduct[1];
        }
      }
    }
    return bigBoxContent; // Return Product Box Content if no sub-product Box is hovered
  };

  const boxContent = getBoxContent();
  // console.log(boxContent);

  const getBoxDetailsContent = () => {
    if (hoveredProduct !== null && hoveredSubProduct !== null) {
      const product = products.find((prod) => prod.id === hoveredProduct);
      if (product) {
        const subProduct = product.productsList[hoveredSubProduct];
        if (subProduct) {
          return subProduct[2];
        }
      }
    }
    return null; // Return Null if no sub-product Box is hovered
  };
  const boxDetailsContent = getBoxDetailsContent();

  const getBoxTitleContent = () => {
    if (hoveredProduct !== null && hoveredSubProduct !== null) {
      const product = products.find((prod) => prod.id === hoveredProduct);
      if (product) {
        const subProduct = product.productsList[hoveredSubProduct];
        if (subProduct) {
          return subProduct[0];
        }
      }
    }
    return null; // Return Null if no sub-product Box is hovered
  };
  const boxTitleContent = getBoxTitleContent();

  useEffect(() => {
    getBoxContent();
    getBoxDetailsContent();
    getBoxTitleContent();

    /* eslint-disable */
  }, [products]);

  return (
    <div>
      <div className="products-list text-white ">
        <div className=" p-4">
          <div className="mt-5">
            <h4 className="mx-5" style={{ fontWeight: "600" }}>
              Our Products
            </h4>
          </div>
          <div className="mt-3 mb-3 mx-3 underline"></div>
          {products.map((item) => (
            <div>
              <div
                className=" d-flex product-container "
                key={item.id}
                onMouseEnter={() => handleMouseOver(item.id)}
                onMouseLeave={handleMouseOut}
              >
                <div
                  className={`col-lg-4 product-item ${
                    hoveredProduct === item.id ? "hovered" : ""
                  }`}
                >
                  <div className="product-details d-flex justify-content-between p-4">
                    <div>{item.productName} </div>
                    <div>
                      {item.iconRight}
                      {item.iconLeft}
                    </div>
                  </div>
                </div>

                {/* Condition to Check which ProductName is hovered  */}
                {hoveredProduct === item.id && (
                  <div className="sub-products col-lg-4">
                    {item?.productsList?.map((subProduct, index) => (
                      <div
                        className=" sub-products-details d-flex justify-content-between p-4 "
                        onMouseEnter={() => handleSubProductMouseOver(index)}
                        onMouseLeave={handleSubProductMouseOut}
                      >
                        {/* <Link to="/request-demo/defecthandling"> */}
                        <Link to={route}>
                          <div
                            className="sub-product-item"
                            key={index}
                            onClick={handleClick}
                          >
                            {subProduct[0]}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {hoveredProduct === item.id ? (
                <div className="box p-3 text-center">
                  {boxTitleContent ? (
                    <div>
                      <h5 className="">{boxTitleContent}</h5>
                    </div>
                  ) : (
                    <div>
                      <h5 className="">{item.productName}</h5>
                    </div>
                  )}

                  <div className="mt-3">{boxContent}</div>
                  {boxDetailsContent ? (
                    <div className="mt-4 details">
                      <h6>WHAT YOU GET :</h6>
                      {boxDetailsContent}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
