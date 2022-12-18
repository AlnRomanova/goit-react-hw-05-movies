import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "pages/HomePage/HomePage";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";


export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<Movies/>}>
        <Route path=":movieId" element={<MovieDetails/>}/>
        </Route>

      </Route>
    </Routes>
    </>

  );
};
