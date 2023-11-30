import React from "react";
import "../Home/Home.css";
import MyImage from "../../assets/Saad-bg.jpg";
import EmailLogo from "../../assets/Email.png";
import CellLogo from "../../assets/Cell.png";
import LinkedinLogo from "../../assets/linkedin.png";
import { Link } from "react-router-dom";

function Home() {
  let myEmail = "engr.muhammadsaad2016@gmail.com";
  let myCellNo = "+923222034615";
  let myName = "Muhammad Saad Siddiqui";
  let myDesignation = "IT & IoT Head Pakistan Automation";
  let linkedinProfile =
    "http://www.linkedin.com/in/muhammad-saad-siddiqui-6a577b56";

  return (
    <div className="flex flex-wrap w-full h-full justify-center items-center m-10">
      <div className="Title flex flex-wrap justify-center gap-10 top-10">
        <div className="Heading">
          <div className="My-Name ">{myName.toUpperCase()}</div>
          <div className="My-Desig ">{myDesignation}</div>
          <hr className="Name-Underline w-full bg-white border-0 rounded "></hr>
          <div className="flex flex-wrap gap-5 mt-2">
            <div className="flex flex-wrap gap-2">
              <div className="Icon">
                <img src={EmailLogo} />
              </div>
              <Link to={`mailto:${myEmail}`} className="text-white">
                {myEmail}
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="Icon">
                <img src={CellLogo} />
              </div>
              <Link to={`tel:${myCellNo}`} className="text-white">
                {myCellNo}
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="Icon">
              <img src={LinkedinLogo} />
            </div>
            <Link to={linkedinProfile} target="_blank" className="text-white">
              {myName}
            </Link>
          </div>
        </div>
        <div className="PicFrame m-3">
          <img className="w-full h-auto" src={MyImage} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
