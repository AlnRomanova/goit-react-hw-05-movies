import React from 'react';
import StyledLink from './Navigation.styled';


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </ul>
    </nav>
  )
}


export default Navigation;
