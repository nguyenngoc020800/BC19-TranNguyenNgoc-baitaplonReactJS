import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieShowTimes } from "../slices/movieShowTimeSlice";
import { useParams, useNavigate } from "react-router-dom";
import { Tabs } from "antd";

import styled from "styled-components";
const { TabPane } = Tabs;
const TimeShowing = () => {
  const [tabPosition] = useState("left");
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.movieShowTime);
  console.log(data);
  const dispatch = useDispatch();
  const { movieID } = useParams("");
  console.log("movieID", movieID);
  useEffect(() => {
    dispatch(getMovieShowTimes(movieID));
  }, [movieID]);
  const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 499px;
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

  if (data.heThongRapChieu !== []) {
    return (
      <Container>
        <Tabs tabPosition={tabPosition}>
          {data.heThongRapChieu?.map((brand, index) => {
            return (
              <TabPane
                tab={
                  <div className="py-2 px-4">
                    <img src={brand.logo} className="tab-img" alt="" />
                  </div>
                }
                key={index}
              >
                <Tabs tabPosition={tabPosition}>
                  {brand.cumRapChieu?.map((item, index5) => {
                    return (
                      <TabPane
                        tab={
                          <LogoItem>
                            <img
                              src={item.hinhAnh}
                              className="logo-img"
                              alt=""
                            />
                            <div className="logo-name">
                              <span className=" m-0">{item.tenCumRap}</span>
                            </div>
                            <button className="btn btn-outline-primary btn-details">
                              Details
                            </button>
                          </LogoItem>
                        }
                        key={index5}
                      >
                        <div className="row pb-2">
                          {item.lichChieuPhim.map((lichChieu, index2) => {
                            return (
                              <div
                                className="col-3 d-flex justify-content-center mt-2"
                                key={index2}
                              >
                                <button
                                  className="btn btn-outline-primary"
                                  onClick={() => {
                                    navigate(
                                      `/ticketroom/${lichChieu.maLichChieu}`
                                    );
                                  }}
                                >
                                  {lichChieu.ngayChieuGioChieu}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </TabPane>
                    );
                  })}
                </Tabs>
              </TabPane>
            );
          })}
        </Tabs>
      </Container>
    );
  }
  return <h2> không có lịch chiếu </h2>;
};

export default TimeShowing;
