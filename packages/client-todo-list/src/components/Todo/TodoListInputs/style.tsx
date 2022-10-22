import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3px;
    label {
      ${(props) => props.theme.typo.labelM}
    }
    input {
      border: 1px solid ${(props) => props.theme.color.grey500};
      border-radius: 10px;
      padding: 0 5px;
      ${(props) => props.theme.typo.bodyM}
    }
  }
`;
