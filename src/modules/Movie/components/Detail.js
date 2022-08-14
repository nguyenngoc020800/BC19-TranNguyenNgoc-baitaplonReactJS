import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../slices/movieDetailSlice";
import styled from "styled-components";
const Detail = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movieDetail);
  const { movieID } = useParams("");

  useEffect(() => {
    dispatch(getMovieDetail(movieID));
  }, []);
  console.log(data);
  const MovieDetail = styled.div`
    display: flex;
    background-color: #0f1f27;
    padding-top: 64px;
    .container {
      .row {
        align-items: center;
        .img {
          display: flex;
          align-items: center;

          width: 180px;
          height: 400px;
          img {
            height: 90%;
            width: 60%;
            justify-content: center;
          }
        }
        .detail {
          h1 {
            color: #fff;
          }
        }
      }
    }
  `;
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <MovieDetail>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 img">
            <img src={data.hinhAnh} width="100%" alt={data.tenPhim} />
          </div>
          <div className="col-sm-6 detail">
            <h1> {data.tenPhim}</h1>
            <a href={data.trailer}>
              <button className="btn btn-outline-success">trailer</button>
            </a>
            <span className="text-light pl-5">
              Đánh giá: {data.danhGia} / 10
            </span>
            <span className="text-light d-block pt-3">{data.moTa}</span>
          </div>
        </div>
      </div>
    </MovieDetail>
  );
};

export default Detail;
