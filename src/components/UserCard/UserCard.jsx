import {
  CardBox,
  DescriptionBox,
  FollowBtn,
  Followers,
  FollowingBtn,
  Hero,
  Logo,
  ProfileBox,
  ProfileImage,
  ProfileThumb,
  Tweets,
  TweetsBtn,
} from './UserCard.styled';

import LogoPicture from '../../images/Logogoit.png';
import hero from '../../images/picture2 1card.png';
import { useState } from 'react';
import { UpdateUserFollow } from 'components/API';
import { useLocation } from 'react-router-dom';

export const Card = ({
  tweets,
  followers,
  avatar,
  id,
  following,
  updateList,
}) => {
  const [follow, setFollow] = useState(following);
  const [quantity, setQuantity] = useState(followers);

  const location = useLocation();

  const handleFollowing = () => {
    updateList(id);
    const newQuantity = Number(quantity) + 1;
    setQuantity(newQuantity);
    setFollow(true);
    async function fetch() {
      await UpdateUserFollow(id, {
        followers: newQuantity,
        following: true,
      });
    }
    fetch();
  };

  const handleFollow = () => {
    const newQuantity = Number(quantity) - 1;
    setQuantity(newQuantity);
    setFollow(false);
    async function fetch() {
      const updateUser = await UpdateUserFollow(id, {
        followers: newQuantity,
        following: false,
      });
    }
    fetch();
  };
  return (
    <CardBox>
      <Logo src={LogoPicture} alt="logo" />
      <Hero src={hero} alt="pict" />
      <ProfileBox>
        <ProfileThumb>
          <ProfileImage src={avatar} alt="user avatar" />
        </ProfileThumb>
      </ProfileBox>
      <DescriptionBox>
        <Tweets>{tweets} Tweets</Tweets>
        <Followers>
          {parseInt(quantity).toLocaleString('en-US')} FOLLOWERS
        </Followers>
      </DescriptionBox>
      {!follow ? (
        <FollowBtn type="button" onClick={handleFollowing}>
          Follow
        </FollowBtn>
      ) : (
        <FollowingBtn type="button" onClick={handleFollow}>
          Following
        </FollowingBtn>
      )}

      <TweetsBtn to={`${id}`} state={{ from: location }}>
        Look tweets
      </TweetsBtn>
    </CardBox>
  );
};
