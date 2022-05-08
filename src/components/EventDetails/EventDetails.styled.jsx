import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const EventDetailsWrap = styled.div`
  border: solid 2px #2196f3;
  padding: 20px;
  display: flex;
`;
export const EventDetailsImg = styled.img``;
export const EventDetailsInfo = styled.div`
  margin-left: 20px;
`;
export const EventDetailsTitle = styled.h2`
  font-size: 30px;
  color: #2196f3;
`;
export const EventDetailstext = styled.p`
  font-size: 24px;
  margin: 0;
  margin-left: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const EventDetailsLink = styled(Link)`
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

export const GoBackIcon = styled(FaArrowLeft)`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;
