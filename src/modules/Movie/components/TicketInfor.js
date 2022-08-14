import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { finishBooking } from "../slices/movieBookingTicket";

const Ticketinfor = styled.div`
  position: fixed;
  width: 32%;
  border: solid 1px #333;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .infor-line {
    padding: 20px 0;
    & + .infor-line {
      border-top: solid 1px #333;
    }
    span:nth-of-type(2) {
      color: green;
    }
  }
`;
const TicketInfor = () => {
  const [totalCharge, setCharge] = useState(0);
  const { data, veSapMua, isLoading, veDaMua } = useSelector(
    (state) => state.movieBookingTicket
  );
  const dispatch = useDispatch();
  const tenVeSapMua = veSapMua.map((ve) => ve.tenGhe);
  const tenVeSapMuaString = tenVeSapMua.join(" - ");
  const calCharge = () => {
    const charge = veSapMua?.reduce((result, ve) => (result += ve.giaVe), 0);
    setCharge(charge);
  };
  useEffect(() => {
    calCharge();
  }, [veSapMua]);

  const handleClick = () => {
    alert(`bạn đã mua vé ${tenVeSapMuaString}`);
    dispatch(finishBooking());
  };
  useEffect(() => {
    console.log("veDaMua", veDaMua);
  }, [veDaMua]);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <Ticketinfor>
      <div className="infor">
        <h2 className="text-center py-3">{totalCharge} VNĐ</h2>
        <div className="infor-line d-flex  justify-content-between">
          <span>tên phim</span>
          <span>{data.thongTinPhim?.tenPhim}</span>
        </div>
        <div className="infor-line d-flex  justify-content-between">
          <span>rạp</span>
          <span>{data.thongTinPhim?.tenRap}</span>
        </div>
        <div className="infor-line d-flex  justify-content-between">
          <span>cụm rạp</span>
          <span>{data.thongTinPhim?.tenCumRap}</span>
        </div>
        <div className="infor-line d-flex  justify-content-between">
          <span>ngày và giờ chiếu</span>
          <span>
            {data.thongTinPhim?.ngayChieu}-{data.thongTinPhim?.gioChieu}
          </span>
        </div>
        <div className="infor-line d-flex  justify-content-between">
          <span> địa chỉ </span>
          <span>{data.thongTinPhim?.diaChi}</span>
        </div>
        <div className="infor-line d-flex  justify-content-between">
          <span>vé đã chọn</span>
          <span>{tenVeSapMuaString}</span>
        </div>
        {veSapMua && veSapMua.length ? (
          <button className="btn btn-success w-100" onClick={handleClick}>
            mua vé
          </button>
        ) : (
          <button className="btn btn-success w-100" disabled>
            mua vé
          </button>
        )}
      </div>
    </Ticketinfor>
  );
};

export default TicketInfor;
