// định nghĩa các function gọi API liên quan đến movie
import axiosClient from "./axiosClient";
export const getMovies = () => {
  return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
    params: {
      maNhom: "GP01",
    },
  });
};

export const getMovieDeTails = (movieID) => {
  return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
    params: {
      maPhim: movieID,
    },
  });
};
export const getBanner = () => {
  return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
};
