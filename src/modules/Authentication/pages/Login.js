import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login, register } from "../slices/authSlice";
import { Navigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
const Login = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log(values);
    dispatch(login(values));
  };
  const onError = (value) => {
    console.log(value.matKhau);
  };
  if (user) {
    if (user.maLoaiNguoiDung === "QuanTri") {
      return <Navigate to="/admin/movies" />;
    }
    return <Navigate to="/" />;
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          {/* <label htmlFor=""> tài khoản </label> */}
          <br />
          <TextField
            label="Tài Khoản"
            type="text"
            {...register("taiKhoan", {
              required: {
                value: true,
                message: "tài khoản không được để trống",
              },
              minLength: {
                value: 5,
                message: "tài khoản phải có ít nhất 5 ký tự",
              },
              maxLength: {
                value: 20,
                message: "tài khoản chỉ đc tối đa 20 ký tự",
              },
            })}
            error={!!errors.taiKhoan}
            helperText={errors.taiKhoan?.message}
          />
          {/* {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>} */}
        </div>
        <div>
          {/* <label htmlFor="">mật khẩu</label>
          <br /> */}
          <TextField
            type="password"
            label="matKhau"
            {...register("matKhau", {
              required: {
                value: true,
                message: "mat khau khong duoc de trong ",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "mau khau khong dung dinh dang",
              },
            })}
            error={!!errors.matKhau}
            helperText={errors.matKhau?.message}
          />
          {/* {errors.matKhau && <span>{errors.matKhau.message}</span>} */}
        </div>
        <br />
        <Button type="submit" variant="contained" disabled={isLoading}>
          đăng nhập
        </Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
