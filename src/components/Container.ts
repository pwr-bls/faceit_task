import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  max-width: 960px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;

  @media(max-width: ${theme.breakpoints.m}) {
    max-width: 768px;
    margin: ${theme.spacing(6)} ${theme.spacing(6)} 0 ${theme.spacing(6)};
  }
  @media(max-width: ${theme.breakpoints.s}) {
    margin: ${theme.spacing(6)} ${theme.spacing(2)} 0 ${theme.spacing(2)};
  }
`;

export default Container;
