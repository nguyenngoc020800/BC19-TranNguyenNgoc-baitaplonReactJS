import React from "react";
import TicketMap from "../components/TicketMap";
import TicketInfor from "../components/TicketInfor";
import styled from "styled-components";
const MovieContainer = styled.div`
  padding-top: 100px;
  .w1k4px {
    max-width: 90%;
  }
`;
const MovieBookingTicket = () => {
  return (
    <MovieContainer>
      <div className="container-fluid w1k4px">
        <div className="row">
          <div className="col-8 p-0">
            <TicketMap />
          </div>
          <div className="col-4">
            <TicketInfor />
          </div>
        </div>
      </div>
    </MovieContainer>
  );
};

export default MovieBookingTicket;
