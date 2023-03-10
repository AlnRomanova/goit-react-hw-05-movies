import { lazy, Suspense} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Cast from "./Cast";
import Reviews from "./Reviews";

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'))


export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
    </Suspense>

  );
};
