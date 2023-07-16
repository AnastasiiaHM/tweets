import { Headier, Logo, Title } from './Header.styled';

import logotweets from '../../images/logo.png';

export const Header = () => {
  return (
    <Headier>
      <Logo src={logotweets} alt="logo tweets" />
      <Title>Tweeter spaces</Title>
    </Headier>
  );
};
