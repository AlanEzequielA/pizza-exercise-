import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent ;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p{
    transform: translate( -175%, 100% );
    font-weight: bold;
  }
`

export  const IconPizza = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate( -50%, -15% );
` 