import React, { useState } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownToggle,
  DropdownWrapper,
  Option,
} from './Select.styled';

export const Select = ({ updateOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState('all');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleToogleOption = e => {
    const option = e.target.textContent;
    setOptions(option);
    updateOption(options);
  };

  return (
    <DropdownWrapper>
      <DropdownToggle onClick={toggleDropdown}>
        Select some options...
      </DropdownToggle>
      <DropdownMenu isOpen={isOpen}>
        <DropdownMenuItem>
          <Option type="button" onClick={handleToogleOption}>
            All
          </Option>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {' '}
          <Option type="button" onClick={handleToogleOption}>
            Follow
          </Option>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {' '}
          <Option type="button" onClick={handleToogleOption}>
            Followings
          </Option>
        </DropdownMenuItem>
      </DropdownMenu>
    </DropdownWrapper>
  );
};
