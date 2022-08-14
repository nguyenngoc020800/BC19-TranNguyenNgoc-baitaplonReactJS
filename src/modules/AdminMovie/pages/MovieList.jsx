import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFilmLists } from '../slices/adminMovieSlice';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../components/SearchBox';
const MovieList = () => {
  const { data } = useSelector((state) => state.adminMovie)
  console.log(data)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFilmLists())
  }, [])
  if (data.length) {
    
    return (
      <>
      <button className='btn btn-outline-primary' onClick={() => {
        navigate("/admin/movies/add")
      }}>Add Film</button>
      <SearchBox listActive={data} placeholder="nhập tên phim"/>
    </>
  )
}
}

export default MovieList