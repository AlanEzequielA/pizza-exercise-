import styled from 'styled-components';

export const HeroWrapper = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url('/images/pizza-3.jpg');
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 1.5rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;

  @media screen and (max-width: 650px){
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 7.5vw, 3.5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  
  @media screen and (max-width: 650px){
    width: 80%;
  }
`;

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.3vw, 2.4rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover{
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

