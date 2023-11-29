import React from "react";
import NavBar from "../../components/Header/NavBar/NavBar";
import { useParams } from "react-router-dom";
import "./SystemDetails.css";
import SystemForms from "../../components/SystemsForms/SystemsForms";
import fsinfo from "../../assets/images/systemsinfo/5sinfo.jpg";
import bosinfo from "../../assets/images/systemsinfo/bosinfo.jpg";
import ofsinfo from "../../assets/images/systemsinfo/ofsinfo.jpeg";
import health from "../../assets/images/systemsinfo/healthinfo.jpg";
import cilinfo from "../../assets/images/systemsinfo/cilinfo.jpg";
import centerinfo from "../../assets/images/systemsinfo/centerinfo.jpg";
import ddsinfo from "../../assets/images/systemsinfo/ddsinfo.jpg";
import assetinfo from "../../assets/images/systemsinfo/assetinfo.jpg";
import defectinfo from "../../assets/images/systemsinfo/defectinfo.jpg";

const SystemDetails = () => {
  const { page } = useParams();
  // console.log(page)
  let content = [
    {
      id: 1,
      title: "Asset Management",
      image: (
        <img
          src={assetinfo}
          className="img-fluid"
          style={{ height: "300px" }}
          alt=""
        />
      ),
      details: [
        <li>Track and manage assets.</li>,
        <li>Optimize asset utilization.</li>,
        <li>Improve maintenance and cost-efficiency.</li>,
        <li>Enhance asset lifecycle management.</li>,
      ],
      route: "assetmanagement",
    },
    {
      id: 2,
      title: "Control Inspection and Lubrication System Software",
      image: (
        <img
          src={defectinfo}
          className="img-fluid"
          style={{ height: "300px" }}
          alt=""
        />
      ),
      details: [
        <li>Monitor equipment inspections.</li>,
        <li>Manage lubrication schedules.</li>,
        <li>Ensure machinery reliability.</li>,
        <li>Improve maintenance efficiency.</li>,
      ],
      route: "cil",
    },
    {
      id: 3,
      title: "Defect Handling",
      image: (
        <img
          src={cilinfo}
          className="img-fluid"
          style={{ height: "300px" }}
          alt=""
        />
      ),
      details: [
        <li>Efficiently track and manage defects.</li>,
        <li>Prioritize and assign tasks.</li>,
        <li>Improve quality and customer satisfaction.</li>,
        <li>Streamline defect resolution processes.</li>,
      ],
      route: "defecthandling",
    },
    {
      id: 4,
      title: "5s Audit",
      image: (
        <img
          src={fsinfo}
          className="img-fluid"
          style={{ height: "300px" }}
          alt=""
        />
      ),
      details: [
        <li>Sort: Remove unneeded items.</li>,
        <li>Set in Order: Organize and label.</li>,
        <li>Shine: Regular cleaning schedule.</li>,
        <li>Standardize: Consistent procedures.</li>,
        <li>Sustain: Ongoing monitoring.</li>,
      ],
      route: "5saudit",
    },
    {
      id: 5,
      title: "Quality and Safety Behavior Observation System Software",
      image: <img src={bosinfo} className="img-fluid" alt="" />,
      details: [
        <li>Monitor quality and safety practices.</li>,
        <li>Collect real-time observations.</li>,
        <li>Enhance compliance and reduce risks.</li>,
        <li>Improve workplace safety and product quality.</li>,
      ],
      route: "bos",
    },
    {
      id: 6,
      title: "Observation Feedback System Software",
      image: (
        <img
          src={ofsinfo}
          className="img-fluid"
          style={{ height: "300px" }}
          alt=""
        />
      ),
      details: [
        <li>Collect real-time observations.</li>,
        <li>Provide feedback and insights.</li>,
        <li>Enhance accountability and performance..</li>,
        <li>Streamline communication and collaboration.</li>,
      ],
      route: "ofs",
    },
    {
      id: 7,
      title: "Health Check System Software",
      image: (
        <img
          src={health}
          className="img-fluid"
          style={{ height: "300px" }}
          alt=""
        />
      ),
      details: [
        <li>Evaluate manufacturing operations.</li>,
        <li>Identify areas for improvement.</li>,
        <li>Enhance productivity and quality.</li>,
        <li>Streamline manufacturing processes..</li>,
      ],
      route: "healthcheck",
    },
    {
      id: 8,
      title: "Daily Direction System Software",
      image: (
        <img
          src={ddsinfo}
          className="img-fluid"
          style={{ height: "300px" }}
          alt=""
        />
      ),
      details: [
        <li>Prioritize daily tasks.</li>,
        <li>Schedule and track assignments.</li>,
        <li>Set goals and deadlines.</li>,
        <li>Enhance productivity and organization.</li>,
      ],
      route: "dds",
    },
    {
      id: 9,
      title: "Center Line System Software",
      image: (
        <img
          src={centerinfo}
          className="img-fluid"
          style={{ height: "300px" }}
          alt=""
        />
      ),
      details: [
        <li>Establish and maintain process centerlines.</li>,
        <li>Monitor and control manufacturing parameters.</li>,
        <li>Ensure product quality and consistency.</li>,
        <li>Improve production efficiency and reliability.</li>,
      ],
      route: "centerline",
    },
    {
      id: 10,
      title: "Overall Equipment Effectiveness (OEE) System",
      image: (
        <img
          src={centerinfo}
          className="img-fluid"
          style={{ height: "300px" }}
          alt=""
        />
      ),
      details: [
        <li>Measure equipment efficiency.</li>,
        <li>Identify areas for improvement.</li>,
        <li>Enhance production and reduce downtime.</li>,
        <li>Optimize manufacturing processes.</li>,
      ],
      route: "oee",
    },
  ];

  const selectedContent = content.find(
    (item) => item.route.toLowerCase() === page
  );

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div
        className="d-flex justify-content-around  system-container mx-4 "
        style={{ marginTop: "9rem" }}
      >
        <div className="  w-100 mx-2 ">
          <div className="system-title mt-3">{selectedContent.title}</div>
          <div className="system-img mt-5">{selectedContent.image}</div>
          <div className="system-details mt-3">{selectedContent.details}</div>
        </div>

        <div className=" w-100 mx-2 system-form ">
          <div className="system-title mt-3 ">
            Access the Demo - Fill in the Form
          </div>
          <div className="mt-5">
            <SystemForms content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDetails;
