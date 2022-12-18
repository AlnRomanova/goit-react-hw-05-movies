import React from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
          <Link state={{from: location }} to={`${id}`}>{title}</Link></li>
        ))}
        <Outlet />
      </ul>
    </>
  );
};

export default HomePage;
