import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const TicketCard = () => {
  return (
    <>
      <div className="row-tickets align-items-center">
        <div className="group-customer">
          <div className="col-5 align-items-center ticket-details d-flex align-items-center gap-30">
            <img
              src="images/user_01.jpg"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
              className="img-fluid"
              alt="user"
            />
            <div className="p">
              <p>
                <strong>Contact Email not Linked</strong>
              </p>
              <p>Updated 1 day ago</p>
            </div>
          </div>
          <div className="col-7 group-customer-details align-items-center">
            <div className="col-4 justify-content-start ticket-customer-name">
              <div>
                <p>
                  <strong>Tom Cruise</strong>
                </p>
                <p>on 24.05.2019</p>
              </div>
            </div>
            <div className="col-4 justify-content-start ticket-date col-2">
              <div>
                <p>
                  <strong>May 26, 2019</strong>
                </p>
                <p>6:30 PM</p>
              </div>
            </div>
            <div className="col-4 justify-content-start ticket-priority">
              <button
                className="btn bg-danger text-white"
                style={{ borderRadius: "23px" }}
              >
                HIGH
              </button>
            </div>
          </div>
        </div>
        <div className="ticket-three-dots">
          <BsThreeDotsVertical className="fs-3" />
        </div>
      </div>
    </>
  );
};

export default TicketCard;
