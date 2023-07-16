import styled from 'styled-components';
import { FcLike } from 'react-icons/fc';
import { BsFillHeartbreakFill } from 'react-icons/bs';

export const TweetBox = styled.div`
  display: flex;
  width: 800px;
  min-height: 100px;
  flex-direction: row;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #7d66b5 54.28%,
    #b9a9df 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  gap: 10px;

  @media (min-width: 1440px) {
    gap: 20px;
    flex-direction: row;

    max-width: 1200px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(244, 220, 32, 0.859);
  }
`;
export const Photo = styled.img`
  display: block;
  max-width: 240px;
  max-height: 320px;
  object-fit: cover;

  @media (min-width: 1440px) {
    max-width: 240px;
    max-height: 320px;
  }
`;
export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  color: #373737;
`;
export const LikeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;
export const Like = styled(FcLike)`
  width: 25px;
  height: 25px;
`;
export const Dislike = styled(BsFillHeartbreakFill)`
  width: 25px;
  height: 25px;
`;
