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

    .customSwitch {
      margin-right: 10px;
    }

    div.username {
      font-size: 13px;
      display: block;
      margin-left: 10px;
      text-align: left;
      display: flex;
      align-items: center;

      .cover {
        width: 34px;
        height: 34px;
        border-radius: 17px;
        overflow: hidden;
        margin-right: 15px;
        border: 2px solid ${(props) => props.theme.colors.primary};

        img {
          width: 100%;
        }
      }
    }

    button {
      background: none;
      border: 0;
      font-size: 13px;
      display: block;
      text-align: left;
      color: ${(props) => props.theme.colors.text};

      small {
        font-weight: bold;
      }
    }
  }
`;
