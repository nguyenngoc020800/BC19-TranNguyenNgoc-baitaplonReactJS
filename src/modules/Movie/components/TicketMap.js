import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookingInfors } from "../slices/movieBookingTicket";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addOrRemoveTicket } from "../slices/movieBookingTicket";

const TicketLayout = styled.div`
  .chair-map {
    flex-wrap: wrap;
    button {
      margin: 5px 12px;
    }
  }
  .monitor {
    height: 20vh;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;
const TicketMap = () => {
  const { data, isLoading, veSapMua } = useSelector((state) => {
    return state.movieBookingTicket;
  });
  const { ID } = useParams("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookingInfors(ID));
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data.danhSachGhe]);
  const handleBuyTicket = (infor) => {
    // console.log(infor);
    dispatch(addOrRemoveTicket(infor));
  };
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <TicketLayout>
      <h1 className="monitor bg-primary w-75 d-flex justify-content-center align-items-center text-light ">
        SCREEN
      </h1>
      <div className="guide d-flex justify-content-around pb-3">
        <div className="guide-item">
          <button className="btn btn-secondary mr-2" disabled>
            x
          </button>
          <span>: đã đặt</span>
        </div>
        <div className="guide-item">
          <button className="btn btn-light mr-2">???</button>
          <span>: vé thường </span>
        </div>
        <div className="guide-item">
          <button className="btn btn-warning mr-2">???</button>
          <span>: vé vipprokute</span>
        </div>
      </div>
      <div className="row chair-map justify-content-center">
        {data.danhSachGhe?.map((ghe) => {
          if (ghe.taiKhoanNguoiDat) {
            return (
              <button
                className="btn btn-secondary col-1"
                key={ghe.maGhe}
                disabled
              >
                x
              </button>
            );
          }
          if (ghe.loaiGhe === "Vip" && !ghe.taiKhoanNguoiDat) {
            const found = veSapMua?.findIndex((ve) => ve.maGhe === ghe.maGhe);
            if (found !== -1) {
              return (
                <button
                  key={ghe.maGhe}
                  className="btn btn-success col-1"
                  onClick={() => {
                    handleBuyTicket(ghe);
                  }}
                >
                  {ghe.tenGhe}
                </button>
              );
            }
            return (
              <button
                key={ghe.maGhe}
                className="btn btn-warning col-1"
                onClick={() => {
                  handleBuyTicket(ghe);
                }}
              >
                {ghe.tenGhe}
              </button>
            );
          }
          if (ghe.loaiGhe === "Thuong" && !ghe.taiKhoanNguoiDat) {
            const found = veSapMua?.findIndex((ve) => ve.maGhe === ghe.maGhe);
            if (found !== -1) {
              return (
                <button
                  key={ghe.maGhe}
                  className="btn btn-success col-1"
                  onClick={() => {
                    handleBuyTicket(ghe);
                  }}
                >
                  {ghe.tenGhe}
                </button>
              );
            }

            return (
              <button
                key={ghe.maGhe}
                className="btn btn-light col-1"
                onClick={() => {
                  handleBuyTicket(ghe);
                }}
              >
                {ghe.tenGhe}
              </button>
            );
          }
        })}
      </div>
    </TicketLayout>
  );
};

export default TicketMap;
