import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const EList = styled.ul`
  list-style: none;
`;
export const EItem = styled.li`
  color: #2196f3;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const ELink = styled(Link)`
  color: #2196f3;
  text-decoration: none;
  font-size: 20px;
`;
