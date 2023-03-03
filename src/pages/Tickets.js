import React from "react";
import { BsSortUp, BsThreeDotsVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";
import Header from "../components/Header";
import HorizontalDivider from "../components/HorizontalDivider";
import TicketCard from "../components/TicketCard";
import Meta from "../components/Meta";

const Tickets = () => {
  return (
    <>
      <Meta title="Tickets" />
      <Header activeTab="Tickets" />
      <div className="ticket-wrapper">
        <div className="row scroll">
          <div className="col-12 all-tickets-border">
            <div className="w-100 p-5 d-flex justify-content-between align-items-center">
              <h3>All tickets</h3>
              <div className="d-flex align-items-center gap-60">
                <div className="d-flex align-items-center gap-20">
                  <BsSortUp className="fs-3" />
                  <h4>Sort</h4>
                </div>
                <div className="d-flex align-items-center gap-20">
                  <FaFilter className="fs-5" />
                  <h4>Filter</h4>
                </div>
              </div>
            </div>
            <div className="row tickets-scroll">
              <div className="ordered-ticket d-flex align-items-center justify-content-left px-4 py-2">
                <div className="ticket-details">Ticket details</div>
                <div className="ticket-customer-name">Customer name</div>
                <div className="ticket-date">Date</div>
                <div className="ticket-priority">Priority</div>
                <div className="ticket-three-dots">
                  <BsThreeDotsVertical className="fs-3 hide" />
                </div>
              </div>
              <HorizontalDivider width="100" />
              <div className="ordered-ticket d-flex align-items-center px-4 py-3">
                <TicketCard />
              </div>
              <div className="ordered-ticket d-flex align-items-center px-4 py-3">
                <TicketCard />
              </div>
              <div className="ordered-ticket d-flex align-items-center px-4 py-3">
                <TicketCard />
              </div>
              <div className="ordered-ticket d-flex align-items-center px-4 py-3">
                <TicketCard />
              </div>
              <div className="ordered-ticket d-flex align-items-center px-4 py-3">
                <TicketCard />
              </div>
              <div className="ordered-ticket d-flex align-items-center px-4 py-3">
                <TicketCard />
              </div>
              <div className="ordered-ticket d-flex align-items-center px-4 py-3">
                <TicketCard />
              </div>
              <div className="ordered-ticket d-flex align-items-center px-4 py-3">
                <TicketCard />
              </div>
            </div>
            <div className="w-100 p-5 d-flex justify-content-end align-items-center">
              <div className="d-flex align-items-center gap-60">
                <div className="d-flex align-items-center gap-12">
                  <p>Rows per page:</p>
                  <div className="d-flex align-items-center">
                    <p>
                      <b>8</b>
                    </p>
                    <MdArrowDropDown className="fs-3" />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-30">
                  <p>
                    <span>1</span>-<span>8</span> of <span>1240</span>
                  </p>
                  <GrPrevious className="fs-5" />
                  <GrNext className="fs-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
