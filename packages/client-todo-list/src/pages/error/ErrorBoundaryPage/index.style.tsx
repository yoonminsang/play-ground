import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h1 {
    ${(props) => props.theme.typo.displayL}
  }
  .flex {
    display: flex;
    color: ${(props) => props.theme.color.grey700};
    b {
      color: ${(props) => props.theme.color.red700};
    }
  }
`;
