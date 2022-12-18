import React from 'react';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
          <Link to={id}>{title}</Link></li>
        ))}
        <Outlet />
      </ul>
    </>
  );
};

export default HomePage;
