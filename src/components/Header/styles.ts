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
    p {
      color: gray;
      font-size: 13px;
      font-weight: 500;

      strong {
        color: #fff;
        font-size: 15px;
      }
    }

    button {
      background: none;
      border: 0;
      color: #fff;
      font-size: 13px;
      display: block;
    }

    span {
      color: #05d35e;
      font-size: 11px;
      padding: 0px 6px;
      border-radius: 40px;
      border: 1px solid #05d35e;
      font-weight: 500;
    }
  }
`;
