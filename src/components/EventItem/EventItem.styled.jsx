import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const EventItemWrap = styled.div`
  display: flex;
`;
export const EventImg = styled.img``;
export const EventInfoWrap = styled.div`
  margin-left: 20px;
`;
export const EventText = styled.p`
  font-size: 30px;
  color: #2196f3;
`;
export const EventLink = styled(Link)`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: solid 2px #2196f3;
  background-color: #2196f3;
  color: #fff;
  width: 150px;
  height: 40px;
  font-size: 20px;
`;
