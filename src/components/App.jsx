import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "pages/HomePage/HomePage";
import Movies from "pages/Movies/Movies";


export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/movies" element={<Movies/>}></Route>
      </Route>
    </Routes>
    </>

  );
};
