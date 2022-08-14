import "./App.css";
// import "antd/dist/antd.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./modules/Home/pages/Home";
import Register from "./modules/Authentication/pages/Register";
import Login from "./modules/Authentication/pages/Login";
import MovieDetails from "./modules/Movie/pages/MovieDetails";
import MainLayout from "./layout/MainLayout";
import MovieList from "./modules/AdminMovie/pages/MovieList";
import AddMovie from "./modules/AdminMovie/pages/AddMovie";
import UpdateMovie from "./modules/AdminMovie/pages/UpdateMovie";
import MainLayoutAdmin from "./layout/MainLayoutAdmin";
import AdminRoute from "./router/AdminRoute";
import MovieBookingTicket from "./modules/Movie/pages/MovieBookingTicket";
import UserList from "./modules/AdminUser/pages/UserList";
import AddUser from "./modules/AdminUser/pages/AddUser";
import UpdateUser from "./modules/AdminUser/pages/UpdateUser";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/admin"
          element={
            // <AdminRoute>
            <MainLayoutAdmin />
            // </AdminRoute>
          }
        >
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/add" element={<AddMovie />} />
          <Route path="movies/update/:movieID" element={<UpdateMovie />} />

          <Route path="users" element={<UserList />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="users/update/:userID" element={<UpdateUser />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:movieID" element={<MovieDetails />} />
          <Route path="/ticketroom/:ID" element={<MovieBookingTicket />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/not-found" element={<div> not found</div>} />
      </Routes>
    </>
  );
}

export default App;
