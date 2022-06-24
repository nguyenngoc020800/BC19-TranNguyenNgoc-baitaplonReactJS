import axiosClient from "./axiosClient";

const authAPI = {
  login: (value) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", value);
  },
  register: (value) => {
    return axiosClient.post("QuanLyNguoiDung/DangKy", {
      ...value,
      maNhom: "GP01",
    });
  },
};
export default authAPI;
