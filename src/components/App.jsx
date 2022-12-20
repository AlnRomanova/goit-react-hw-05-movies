import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "pages/HomePage/HomePage";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";



export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>


        <Route path="*" element={<Navigate replace to="/" />}/>

      </Route>
    </Routes>
    </>

  );
};
