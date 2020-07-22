import styled from 'styled-components';

export const Separator = styled.div`
  height: 1px;
  background-color: #5a5a5a;
  width: 75%;
  margin: 0 auto;
`;

export const Container = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1d1e24;
  width: 70px;

  div {
    &.logo {
      width: 100%;
      height: 95px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        a {
          box-shadow: #05d35e 0px 0px 22px -4px;
        }
      }

      a {
        border-radius: 50%;
        transition: all 0.25s ease-in-out;
      }

      svg {
        vertical-align: middle;
      }
    }

    &.refresh {
      width: 100%;
      justify-self: flex-end;
      margin-top: auto;
      height: 70px;
      display: flex;
      align-items: center;
      text-align: center;

      a {
        width: 100%;
        display: block;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        transition: all 0.25s ease-out;

        svg {
          transition: all 0.25s ease-out 0.15s;
        }
      }

      &:hover {
        a {
          border-left: 3px solid #05d35e;

          svg {
            fill: #05d35e;
          }
        }
      }
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  width: 100%;
  padding: 40px 0px;
  text-align: center;

  li {
    padding: 5px 0px;

    a {
      width: 100%;
      display: block;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      transition: all 0.25s ease-out;

      svg {
        transition: all 0.25s ease-out 0.15s;
      }
    }

    &:hover {
      a {
        border-left: 3px solid #05d35e;

        svg {
          fill: #05d35e;
        }
      }
    }

    & + li {
      margin-top: 30px;
    }
  }
`;
