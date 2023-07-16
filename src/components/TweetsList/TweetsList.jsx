import { getTweets } from 'components/API';
import { Tweet } from 'components/Tweet/Tweet';
import { useEffect, useState } from 'react';
import { BackBtn, List, NotTweets } from './TweetsList.styled';
import { useParams } from 'react-router-dom';

export const TweetsList = () => {
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState('');
  const idParam = useParams();
  const value = idParam.id;

  useEffect(() => {
    async function fetch() {
      const response = await getTweets(value);

      setName(response.data.user);
      setTweets(response.data.tweets);
    }
    fetch();
  }, [value]);

  return (
    <>
      <BackBtn to={'/'}>Go back</BackBtn>
      {tweets ? (
        <List>
          {tweets.map(({ description, following, id, image }) => {
            return (
              <li key={id}>
                <Tweet
                  image={image}
                  following={following}
                  description={description}
                  name={name}
                />
              </li>
            );
          })}
        </List>
      ) : (
        <NotTweets>User {name} dont has any tweets.</NotTweets>
      )}
    </>
  );
};
