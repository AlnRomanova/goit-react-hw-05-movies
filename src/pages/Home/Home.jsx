import React from 'react';
import css from './Home.module.css';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
    .then(setMovies)
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <>
    <h1 className={css.homeTitle}>Trending today</h1>
      <ul className={css.homeList}>
        {movies.map(({ id, title }) => (
          <li className={css.homeItem} key={id}>
          <Link state={{from: location }} to={`movies/${id}`}>{title}</Link></li>
        ))}
      </ul>
    </>
  );
};

export default Home;
