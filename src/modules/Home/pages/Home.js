import React from "react";
import BannerComponent from "../components/BannerComponent";
import MovieShowing from "../components/MovieShowing";
import Cinema from "../components/Cinema";
const Home = () => {
  return (
    <div>
      <BannerComponent />
      <MovieShowing />
      <Cinema />
    </div>
  );
};
export default Home;
