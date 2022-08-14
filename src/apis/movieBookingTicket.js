import axiosClient from "./axiosClient";

export const getBookingInfor = (maLichChieu) => {
  return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
    params: {
      MaLichChieu: maLichChieu,
    },
  });
};
