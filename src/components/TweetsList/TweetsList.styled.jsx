import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  text-decoration: none;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    gap: 20px;

    flex-wrap: wrap;
    max-width: 1200px;
  }
`;
export const NotTweets = styled.p`
  margin-bottom: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
`;
export const BackBtn = styled(Link)`
  display: block;
  margin-bottom: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #f86cd0;
  background-color: #56293a;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 10px;
  padding: 4px;
  border-radius: 4px;
  text-align: center;
  width: 100px;
`;
