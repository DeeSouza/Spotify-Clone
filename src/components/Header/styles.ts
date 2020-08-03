import styled from 'styled-components';

export const Container = styled.header`
  height: 95px;
  display: flex;
  align-items: center;
`;

export const WrapperForm = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;

  .info {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: 0;
      font-size: 13px;
      display: block;
      margin-left: 10px;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
