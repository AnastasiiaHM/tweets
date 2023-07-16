import styled from 'styled-components';

export const Container = styled.div``;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1440px) {
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
  }
`;
export const LoadMoreBtn = styled.button`
  width: 196px;
  height: 44px;
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin-top: 3px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  margin-left: auto;
  margin-right: auto;
  :hover {
    transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
    background: #5cd3a8;
  }
`;
