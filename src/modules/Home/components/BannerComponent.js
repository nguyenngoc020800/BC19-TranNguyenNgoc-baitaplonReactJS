import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBanners } from "../slide/bannerSlice";
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
    <div>
      {data.map((banner) => {
        return (
          <div key={banner.maBanner}>
            <img
              key={banner.maPhim}
              src={banner.hinhAnh}
              alt="hinhanh"
              width="300px"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BannerComponent;
