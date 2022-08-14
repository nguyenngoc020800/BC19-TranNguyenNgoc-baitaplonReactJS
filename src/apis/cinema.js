import axiosClient from "./axiosClient";

const cinemaAPI = {
  getBrand: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },
  getCinemaSystemInfor: () => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom: "GP01",
      },
    });
  },
};

const demoAPI = async () => {
  const data = await cinemaAPI.getBrand();
  console.log(data);
};
demoAPI();

export default cinemaAPI;
