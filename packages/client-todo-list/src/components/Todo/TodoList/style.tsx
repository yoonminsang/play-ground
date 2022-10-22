import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  > div:nth-of-type(1) {
    flex: 1;
  }
  > div:nth-of-type(2) {
    flex: 5;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    ${(props) => props.theme.typo.titleL}
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
      display: flex;
      gap: 10px;
      list-style: inside;
      &.selected {
        color: ${(props) => props.theme.color.blue500};
      }
      .btn-remove {
        color: ${(props) => props.theme.color.red500};
      }
    }
  }
`;
