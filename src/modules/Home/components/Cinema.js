import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrands, getCinemaSystemInfors } from "../slide/cinemaSlice";
import { useNavigate } from "react-router-dom";

import { Tabs } from "antd";
import styled from "styled-components";
const { TabPane } = Tabs;

const Cinema = () => {
  const [tabPosition] = useState("left");
  const { brandData, brandSystemData } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCinemaSystemInfors());
  }, []);

  const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    max-height: 499px;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #333;
  `;
  const LogoItem = styled.div`
    padding: 8px 7px 24px;
    max-width: 234px;
    overflow-wrap: anywhere;
    display: flex;
    position: relative;
    .logo-img {
      width: 20%;
      border-radius: 50%;
      margin: 0 10px;
    }
    .logo-name {
      position: relative;
      white-space: break-spaces !important;
      text-align:left !important;
      img {
      }
    }
  }
  .btn-details {
    position: absolute;
    top: 51px;
    right: 6px;
    padding:4px 4px !important;
    font-size:12px;
  }
  `;

  const MovieItem = styled.div`
    display: flex;
    position: relative;
    .movie__img {
      width: 200px;
      padding: 10px 20px;
      img {
        border-radius: 8px;
        height: 180px;
      }
    }
    .timeShowing {
      p {
        padding-top: 20px;
        font-size: 20px;
        &:hover {
          color: #007bff;
          cursor: pointer;
        }
      }
      .dropdown {
        .dropdown-menu.show {
          display: flex;
          flex-direction: column;
          width: 205px;
          justify-content: center;
          padding: 0;
          top: 40px !important;

          transform: unset !important;
        }
      }
    }
    &:hover {
      background-color: rgba(0, 123, 255, 0.1);
    }
    transition: all 0.2s ease-in;
    .btn-details {
      position: absolute;
      bottom: 20px;
      right: 10px;
      padding: 6px 10px !important;
      font-size: 16px;
    }
  `;
  console.log("logorap", brandData);
  console.log("chi tiet rap", brandSystemData);

  return (
    <Container>
      <Tabs tabPosition={tabPosition}>
        {brandData?.map((brand, index) => {
          return (
            <TabPane
              tab={
                <div className="py-2 px-4">
                  <img src={brand.logo} className="tab-img" alt="" />
                </div>
              }
              key={index}
            >
              {brandSystemData?.map((item, index5) => {
                if (item.maHeThongRap === brand.maHeThongRap) {
                  return (
                    <div key={index5}>
                      <Tabs tabPosition={tabPosition}>
                        {item.lstCumRap.map((cumRap, index2) => {
                          return (
                            <TabPane
                              tab={
                                <LogoItem>
                                  <img
                                    src={cumRap.hinhAnh}
                                    className="logo-img"
                                    alt=""
                                  />
                                  <div className="logo-name">
                                    <span className=" m-0">
                                      {cumRap.tenCumRap}
                                    </span>
                                  </div>
                                  <button className="btn btn-outline-primary btn-details">
                                    Details
                                  </button>
                                </LogoItem>
                              }
                              key={index2}
                            >
                              {cumRap.danhSachPhim.map((phim, index3) => {
                                return (
                                  <MovieItem key={index3}>
                                    <div className="movie__img">
                                      <img
                                        src={phim.hinhAnh}
                                        width="100%"
                                        alt=""
                                      />
                                    </div>
                                    <div className="timeShowing">
                                      <p>{phim.tenPhim}</p>
                                      <div className="dropdown">
                                        <button
                                          className="btn btn-outline-primary dropdown-toggle"
                                          type="button"
                                          id={`${cumRap.maCumRap}${phim.maPhim}`}
                                          data-toggle="dropdown"
                                          aria-haspopup="false"
                                          aria-expanded="false"
                                        >
                                          Chọn ngày và giờ chiếu
                                        </button>
                                        <div
                                          className="dropdown-menu"
                                          aria-labelledby={`${cumRap.maCumRap}${phim.maPhim}`}
                                        >
                                          {phim.lstLichChieuTheoPhim.map(
                                            (lichChieu, index4) => {
                                              return (
                                                <button
                                                  onClick={() => {
                                                    navigate(
                                                      `/ticketroom/${lichChieu.maLichChieu}`
                                                    );
                                                  }}
                                                  className="btn btn-outline-primary"
                                                  key={index4}
                                                >
                                                  {lichChieu.ngayChieuGioChieu}
                                                </button>
                                              );
                                            }
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      onClick={() => {
                                        navigate(`/movie/${phim.maPhim}`);
                                      }}
                                      className="btn btn-outline-primary btn-details"
                                    >
                                      Details
                                    </button>
                                  </MovieItem>
                                );
                              })}

                              {/* <LogoItem>
                <img src={brand.logo} className="logo-img" alt="" />
                <span className="logo-name">{brand.tenHeThongRap}</span>
              </LogoItem> */}
                            </TabPane>
                          );
                        })}
                      </Tabs>
                    </div>
                  );
                }
              })}
              {/* <LogoItem>
                <img src={brand.logo} className="logo-img" alt="" />
                <span className="logo-name">{brand.tenHeThongRap}</span>
              </LogoItem> */}
            </TabPane>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default Cinema;
