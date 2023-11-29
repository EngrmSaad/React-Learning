import React from "react";
import { Card } from "antd";
import "./DemoCard.css";
import { Link } from "react-router-dom";

const DemoCard = ({ card }) => {
  // Destructure the 'card' prop
  // console.log(card);
  return (
    <div className="mx-5 ">
      <Card
        className="demo-card mt-5"
        hoverable
        style={{ width: 300 }}
        cover={<div className="card-img">{card.imgSrc}</div>}
      >
        <div className="card-demo">{card.onlineDemo}</div>{" "}
        {/* Access 'onlineDemo' from 'card' object */}
        <div className="mt-3 card-productName">
          {card.prodName} {/* Access 'prodName' from 'card' object */}
        </div>
        <div className="mt-3" style={{ height: 130 }}>
          {card.prodDetails} {/* Access 'prodDetails' from 'card' object */}
        </div>
        <div className="explore-button">
          {/* Access 'demoBtn' from 'card' object */}
          <Link to={`/request-demo/${card.route}`}>
            <button className="mt-3 demo-button">
              {card.demoBtn}
              <span className="">
                {" "}
                <i className={`${card.arrowIcon} card-icon`}></i>{" "}
              </span>
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default DemoCard;
