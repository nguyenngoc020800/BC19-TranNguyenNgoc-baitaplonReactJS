import axiosClient from "./axiosClient";

export const getFilmList = () => {
  return axiosClient.get("QuanLyPhim/LayDanhSachPhim");
};
