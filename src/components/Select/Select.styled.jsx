import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 20px;
  /* margin-right: auto; */
`;

export const DropdownToggle = styled.button`
  background-color: #673145;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #442a34;
  color: #ffffff;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  margin-left: 20px;
`;

export const DropdownMenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #56293a;
  }
`;
export const Option = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
`;
