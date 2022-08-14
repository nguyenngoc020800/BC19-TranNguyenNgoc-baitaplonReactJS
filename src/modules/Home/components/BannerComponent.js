import React from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBanners } from "../slide/bannerSlice";
import style from "../styles/banner.module.css";
const BannerComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
    <div className="mt-5">
      <Slider {...settings}>
        {data.map((banner) => {
          return (
            <div key={banner.maBanner} className={`${style.banner__img} `}>
              <img src={banner.hinhAnh} alt="" />
            </div>
          );
        })}
      </Slider>
      {/* <Carousel fade>
        {data.map((banner) => {
          return (
            <CarouselItem>
              <div className={`${style.banner__img} `}>
                <img key={banner.maBanner} src={banner.hinhAnh} alt="" />
              </div>
            </CarouselItem>
          );
        })}
      </Carousel> */}
    </div>
  );
};

export default BannerComponent;
