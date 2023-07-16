import { getAllUsers } from 'components/API';
import { useEffect, useState } from 'react';

import { List, LoadMoreBtn } from './CardList.styled';
import { Card } from 'components/UserCard/UserCard';
import { Select } from 'components/Select/Select';

export const CardList = () => {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [totalCards, setTotalCards] = useState(50);

  useEffect(() => {
    async function fetch() {
      const response = await getAllUsers();
      setOriginalList(response);
      setList(response);
      setTotalCards(response.length);
    }
    fetch();
  }, []);

  const handleLoadMore = () => {
    const newCardsToShow = cardsToShow + 3;
    if (newCardsToShow <= totalCards) {
      setCardsToShow(newCardsToShow);
    }
  };

  const updateOption = async option => {
    switch (option) {
      case 'All':
        setList(originalList);
        break;
      case 'Follow':
        const follow = originalList.filter(item => item.following === true);
        setList(follow);
        console.log(followings);
        break;
      case 'Followings':
        const followings = originalList.filter(
          item => item.following === false
        );
        setList(followings);
        break;
      default:
        break;
    }
  };

  const updateList = id => {
    const newList = list.filter(obj => obj.id !== id);
    setList(newList);
  };

  const renderedCards = list
    .slice(0, cardsToShow)
    .map(({ avatar, followers, id, tweets, following }) => {
      return (
        <li key={id}>
          <Card
            avatar={avatar}
            followers={followers}
            tweets={tweets.length}
            id={id}
            following={following}
            updateList={updateList}
          />
        </li>
      );
    });

  return (
    <>
      <Select updateOption={updateOption} />
      <List>{renderedCards}</List>
      {cardsToShow <= totalCards && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};
