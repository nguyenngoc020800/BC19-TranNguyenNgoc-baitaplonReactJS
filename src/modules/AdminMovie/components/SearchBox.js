import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Search = styled.div`
  .input {
    width: 100%;
    position: relative;
    border-radius: 30px;
    border: solid 1px #333;
    &:focus-within {
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border: solid 1px #fff;
    }
    .textBox {
      width: 100%;
      background-color: transparent;
      font-size: 14px;
      line-height: 50px;
      border-radius: 30px;
      padding-left: 10px;
      border: none;
      position: relative;
      &:focus {
        outline: 0;
        background-color: #fff;
      }
      &::placeholder {
        color: #bfbfc5;
        font-size: 14px;
      }
    }
  }
  .dropdown {
    background-color: #fff;
    width: 100%;
    border: none;
    .film-items {
      border: solid 1px gray;
      border-radius: 10px;
      img {
        border-radius: 10px;
      }
      .admin-action {
      }
    }
  }
`;

const SearchBox = (props) => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const { listActive, placeholder } = props;
  const [search, setSearch] = useState("");
  const [listFilter, setListFilter] = useState(listActive);
  const handleChangeSearch = (e) => {
    const keyword = e.target.value;
    console.log(keyword);
    if (keyword !== "") {
      const results = listActive.filter((item) => {
        return (
          String(item.tenPhim)
            .toUpperCase()
            .indexOf(e.target.value?.toUpperCase()) > -1
        );
      });
      if (results.length) {
        setListFilter(results);
      } else {
        setListFilter(null);
      }
    } else {
      setListFilter(listActive);
    }

    setSearch(keyword);
  };
  // const handleClickButton = (e) => {
  //   inputRef.current.value = e.target.innerHTML;

  //   setSearch(inputRef.current.value);
  //   setListFilter(null);
  //   sendLocationfromInput(inputRef.current.value);
  // };
  // console.log(search, listFilter);

  return (
    <Search>
      <div className="input my-4">
        <input
          type="search"
          onChange={handleChangeSearch}
          value={search}
          className="textBox"
          placeholder={placeholder}
          ref={inputRef}
        />
      </div>
      <div className="dropdown">
        {listFilter?.map((item, index) => {
          return (
            <div
              key={index}
              className="align-items-center w-100 d-flex film-items p-3 justify-content-between mb-2"
            >
              <img width={120} height={160} src={item.hinhAnh} alt="" />
              <span>{item.tenPhim}</span>
              <span>{item.danhGia}/10</span>
              <div className="admin-action d-flex flex-column">
                <div className="update-del ">
                  <button
                    onClick={() => {
                      navigate(`/admin/movies/update/${item.maPhim}`);
                    }}
                    className="btn btn-outline-primary m-2"
                  >
                    Update
                  </button>
                  <button className="btn btn-outline-danger m-2">Delete</button>
                </div>
                <button className="btn btn-outline-success m-2 ">
                  Add showtimes
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Search>
  );
};

export default SearchBox;
