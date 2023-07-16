import { useState } from 'react';

import { Dislike, Like, LikeBtn, Photo, Text, TweetBox } from './Tweet.styled';

export const Tweet = ({ description, name }) => {
  const [follow, setFollow] = useState(false);

  const handleToogleLike = () => {
    setFollow(!follow);
  };

  return (
    <TweetBox>
      <Photo src="https://loremflickr.com/640/480" alt="photo" />
      <Text>{description}</Text>
      <LikeBtn type="button" onClick={handleToogleLike}>
        {follow ? <Like /> : <Dislike />}
      </LikeBtn>
      <p>{name}</p>
    </TweetBox>
  );
};
