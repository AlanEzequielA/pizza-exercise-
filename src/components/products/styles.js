import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background: #150f0f;
  color: #fff;
`;

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

export const ProductsContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const PImage = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  margin-bottom: 1rem;
`;

export const CardInfo = styled.div`
  font-weight: 700;
`;

export const H3 = styled.h3`
  font-weight: lighter;
  font-size: 1.7rem;
`;

export const H4 = styled.h4`
  font-weight: lighter;
  font-size: 2rem;
`;

export const H5 = styled.h5`
  font-weight: lighter;
  font-size: 1rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  width: 100%;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;