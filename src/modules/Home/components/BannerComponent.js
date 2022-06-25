import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBanners } from "../slide/bannerSlice";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import style from "../styles/banner.module.css";
const BannerComponent = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.banner);
  useEffect(() => {
    dispatch(getBanners());
  }, []);
  console.log(data);
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <Carousel fade>
        {data.map((banner) => {
          return (
            <CarouselItem>
              <div className={`${style.banner__img} `}>
                <img key={banner.maBanner} src={banner.hinhAnh} alt="" />
              </div>
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
};

export default BannerComponent;
