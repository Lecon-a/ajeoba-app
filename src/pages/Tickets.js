import React from "react";
import { BsSortUp, BsThreeDotsVertical } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Header from "../components/Header";
import HorizontalDivider from "../components/HorizontalDivider";
import TicketCard from "../components/TicketCard";

const Tickets = () => {
  return (
    <>
      <Header activeTab="Tickets" />
      <div className="ticket-wrapper">
        <div className="row">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
