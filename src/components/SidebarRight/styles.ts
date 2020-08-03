import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => darken(0.05, props.theme.colors.background)};
  width: 280px;
  padding: 30px 0px 30px 30px;

  h2 {
    font-size: 15px;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    padding-bottom: 10px;
  }
`;
