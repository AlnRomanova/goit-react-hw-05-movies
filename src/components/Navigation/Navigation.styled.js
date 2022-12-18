import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink) `

color: blue;

&.active {
  color: red;
}
`;

export default StyledLink;
