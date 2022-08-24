import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
const Login = () => {
  const navigate = useNavigate();
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
    console.log("đăng nhập không thành công ");
  };
  if (user) {
    navigate("/");
    return;
  }
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <h2 className="text-center">Log in</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          {/* <label htmlFor=""> tài khoản </label> */}
          <br />
          <TextField
            label="Tài Khoản"
            type="text"
            sx={{ width: "100%", marginBottom: "20px" }}
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
            sx={{ width: "100%" }}
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
        <button
          className="btn btn-success w-100"
          type="submit"
          disabled={isLoading}
        >
          đăng nhập
        </button>
      </form>
      <button
        className="btn btn-outline-primary w-100 mt-3"
        onClick={() => {
          navigate("/auth/register");
        }}
      >
        go to register
      </button>
    </div>
  );
};

export default Login;
