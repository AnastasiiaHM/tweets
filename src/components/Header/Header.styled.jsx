import styled from 'styled-components';

export const Headier = styled.header`
  display: flex;
  border-bottom: 2px solid #4e4d4d;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #242323;
`;
export const Title = styled.h1`
  margin-top: 35px;
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 600;
  font-size: 35px;
  line-height: 24px;
  text-transform: uppercase;
  color: #fdb9da;
  text-shadow: 1px 1px 2px #fbf8ff, 0 0 1em #fdb9da, 0 0 0.2em #fdb9da;
`;
export const Logo = styled.img`
  display: block;
  width: 90px;
  height: 80px;
`;
