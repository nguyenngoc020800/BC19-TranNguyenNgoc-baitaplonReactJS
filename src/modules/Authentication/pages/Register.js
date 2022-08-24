import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register as registerAction } from "../slices/authSlice";
import { Button, TextField } from "@mui/material";
const vadidationSchema = yup.object({
  taiKhoan: yup
    .string()
    .required("tài khoản không được để trống.")
    .min(5, " tài khoản phải từ 5 đến 20 kí tự>")
    .max(20, "tài khoản phải từ 5 đến 20 ký tự"),
  matKhau: yup
    .string()
    .required("tài khoản không được để trống")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "mật khẩu không đúng định dạng"
    ),
  email: yup
    .string()
    .required("tài khoản không được để trống")
    .email("mật khẩu không đúng định dạng"),
  hoTen: yup.string().required(" không được để trống"),
  soDt: yup.string().required(" không được để trống"),
});
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    resolver: yupResolver(vadidationSchema),
    mode: "onTouched",
  });
  const onSubmit = (value) => {
    dispatch(registerAction(value)).then((value) => {
      console.log(value.error);
      if (!value.error) {
        navigate("/auth/login");
        dispatch({ type: "auth/deletelError" });
      }
      // console.log(value);
      return;
    });
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <h1 className="text-center">Register</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 w-100">
          {/* <label htmlFor="">tài khoản</label>
          <br />
          <input type="text" {...register("taiKhoan")} />
          {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>} */}
          <TextField
            {...register("taiKhoan")}
            variant="outlined"
            label="Tài Khoản"
            error={!!errors.taiKhoan}
            helperText={errors.taiKhoan?.message}
            sx={{ width: "100%" }}
          />
        </div>
        <div className="mb-3 w-100">
          {/* <label htmlFor="">mật khẩu</label>
          <br />
          <input type="password" {...register("matKhau")} />
          {errors.matKhau && <span>{errors.matKhau.message}</span>} */}
          <TextField
            type="password"
            {...register("matKhau")}
            variant="outlined"
            label="mật Khẩu"
            error={!!errors.matKhau}
            helperText={errors.matKhau?.message}
            sx={{ width: "100%" }}
          />
        </div>
        <div className="mb-3 w-100">
          {/* <label htmlFor="">họ và tên</label>
          <br />
          <input type="text" {...register("hoTen")} />
          {errors.hoTen && <span>{errors.hoTen.message}</span>} */}
          <TextField
            sx={{ width: "100%" }}
            {...register("hoTen")}
            variant="outlined"
            label="Họ và Tên"
            error={!!errors.hoTen}
            helperText={errors.hoTen?.message}
          />
        </div>
        <div className="mb-3 w-100">
          {/* <label htmlFor="">email</label>
          <br />
          <input type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>} */}
          <TextField
            sx={{ width: "100%" }}
            {...register("email")}
            variant="outlined"
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div className="mb-3 w-100">
          {/* <label htmlFor=""> số điện thoại </label>
          <br />
          <input type="text" {...register("soDt")} />
          {errors.soDt && <span>{errors.soDt.message}</span>} */}
          <TextField
            sx={{ width: "100%" }}
            {...register("soDt")}
            variant="outlined"
            label="số điện thoại"
            error={!!errors.soDt}
            helperText={errors.soDt?.message}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-success w-100">
          dang ky
        </button>
      </form>
      <button
        className="mt-3 btn btn-primary w-100"
        onClick={() => {
          navigate("/auth/login");
        }}
      >
        go to login
      </button>
    </div>
  );
};

export default Register;
