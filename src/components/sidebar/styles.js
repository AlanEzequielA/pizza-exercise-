import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarWrapper = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: flex;
  align-items: center;
  top: 0;
  right: ${({status}) => (status ? 0 : '-1000px')};
  transition: 0.5s ease-out;

@media screen and(max-width: 400px){
  width: 100%;
}
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const Icon = styled(FaTimes)``;

export const SidebarContent = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SidebarIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SidebarLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: clamp(1.5rem, 2.3vw, 2.4rem);
  margin-bottom: 1rem;
  transition: 0.2s ease-out;

  &:hover{
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;

export const SidebarBtn = styled.button`
  padding: 0.5rem 1rem;
  font-size: clamp(1.5rem, 2.3vw, 2.4rem);
  transition: 0.2s ease-out;
  font-size: 1.5rem;

  &:hover{
  transition: 0.2s ease-out;
  background-color: #e31837;
  cursor: pointer;
  color: #fff;
}
`;
