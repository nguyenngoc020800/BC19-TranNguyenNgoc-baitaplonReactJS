import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieShowing } from "../slide/movieShowingSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";

const MovieShowing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMovieShowing());
  }, []);
  const { data, isLoading, error } = useSelector((state) => state.movieShowing);
  console.log(data);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const MovieRowContainer = styled.div`
    background-color: #333;
    color: #fff;
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const MovieSlider = styled.div`
    .slick-slider {
      display: flex;
      justify-content: center;
      button {
        display: flex !important;
        align-items: center;
        justify-content: center;
        &.slick-next {
          right: 0%;
        }
        &.slick-prev {
          left: 0;
          z-index: 9999;
        }
      }
      .slick-list {
        overflow: hidden;
        display: grid;
        gap: 6px;
        width: 100%;
        transition: all 0.2s linear;
        user-select: none;
        overflow-y: hidden;
        overflow-x: auto;
        padding: 20px 40px;
        position: relative;
        grid-template-columns: repeat(${data.length}, auto);
        .movieItem {
          transform: scale(1);
          max-width: 300px;
          height: 500px;
          width: 22%;
          transition: all 0.2s linear;
          overflow: hidden;
          border-radius: 6px;
          transform: center;
          position: relative;
          padding-top: 50px;
          &:hover {
            transform: scale(1.1);
            z-index: 10;
            & button {
              opacity: 1;
            }
          }

          img {
            width: 100%;
            height: 90%;
            border-radius: 8px;
          }
          span {
            position: absolute;
            bottom: 44px;
            left: 0;
            text-align: center;
            width: 100%;
            font-size: 16px;
            background-color: rgba(0, 0, 0, 0.7);
            line-height: 20px;
            border-radius: 6px;
            z-index: 11;
          }
          button {
            opacity: 0;
            transition: all 0.2s linear;
          }
        }
      }
    }
  `;
  if (isLoading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <MovieRowContainer>
      <MovieSlider>
        <Slider {...settings}>
          {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
          {data.map((movie) => {
            return (
              <div key={movie.maPhim} className="movieItem">
                <img src={movie.hinhAnh} alt="" />
                <span>{movie.tenPhim}</span>
                <button
                  className="btn btn-success w-100"
                  onClick={() => {
                    navigate(`/movie/${movie.maPhim}`);
                  }}
                >
                  {" "}
                  details
                </button>
              </div>
            );
          })}
        </Slider>
      </MovieSlider>
    </MovieRowContainer>
  );
};

export default MovieShowing;
