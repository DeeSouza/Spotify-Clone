import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  svg {
    margin-right: 20px;
    fill: ${(props) =>
      props.isFocused || props.isFilled ? '#05d35e' : 'gray'};
  }

  input {
    height: 50px;
    background-color: transparent;
    border: none;
    color: gray;
  }
`;
