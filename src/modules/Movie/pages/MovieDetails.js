import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../slices/movieDetailSlice";
const MovieDetails = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movieDetail);
  const { movieID } = useParams("");

  useEffect(() => {
    dispatch(getMovieDetail(movieID));
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
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img src={data.hinhAnh} alt={data.tenPhim} />
          </div>
          <div className="col-sm-6">
            <h1> Ten: {data.tenPhim}</h1>
            <a href={data.trailer}>
              <button>trailer</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
