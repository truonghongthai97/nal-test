import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  transition: 0.3s all;
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 99px;

  &.is-selected,
  &:hover {
    background-color: #efefef;
  }

  &:disabled {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }

  svg {
    width: 20px;
  }
`;
