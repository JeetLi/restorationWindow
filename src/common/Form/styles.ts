import styled from "styled-components";

export const FormWrapper = styled.form``;
export const InputWrapper = styled.div`
  display: flex;
  gap: 30px;
  &::after {
    box-sizing: border-box;
    outline: 0;
  }
  &::before {
    box-sizing: border-box;
    outline: 0;
  }

  &button {
    max-width: 250px;
  }

  @media (max-width: 575px) {
    flex-direction: column;
  }

  @media (max-width: 1199px) {
    gap: calc(10px + 20 * ((100vw - 320px) / 1600));
  }
`;
export const DefaultSpan = styled("span")`
  box-sizing: border-box;
  outline: 0;
`;

export const InputNumber = styled.div``;
