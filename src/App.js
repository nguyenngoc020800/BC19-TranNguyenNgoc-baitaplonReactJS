import "./App.css";
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
function App() {
  return (
    <>
      <h1>abc</h1>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <MainLayoutAdmin />
            </AdminRoute>
          }
        >
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/add" element={<AddMovie />} />
          <Route path="movies/update/:movieID" element={<UpdateMovie />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:movieID" element={<MovieDetails />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/not-found" element={<div> not found</div>} />
      </Routes>
    </>
  );
}

export default App;
