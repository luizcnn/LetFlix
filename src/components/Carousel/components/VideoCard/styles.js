import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`
  border: 1px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
    transform: scale(1.1)
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
