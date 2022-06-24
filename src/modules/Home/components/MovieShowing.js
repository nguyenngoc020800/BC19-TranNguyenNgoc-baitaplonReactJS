import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieShowing } from "../slide/movieShowingSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const MovieShowing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMovieShowing());
  }, []);
  const { data, isLoading, error } = useSelector((state) => state.movieShowing);
  console.log(data);
  if (isLoading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {data.map((movie) => {
        return (
          <p key={movie.maPhim}>
            <Typography variant="body1" component="p">
              {movie.tenPhim}
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                navigate(`/movie/${movie.maPhim}`);
              }}
            >
              details
            </Button>
          </p>
        );
      })}
    </div>
  );
};

export default MovieShowing;
