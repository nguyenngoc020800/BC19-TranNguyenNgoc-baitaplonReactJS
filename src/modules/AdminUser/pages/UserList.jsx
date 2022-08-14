import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <button className='btn btn-outline-primary' onClick={() => {
        navigate(`/admin/users/add`)
      }}>thêm người dùng</button>
      {/* <SearchBox listActive = {data} */}
    </>
  )
}

export default UserList