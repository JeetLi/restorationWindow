import styled from "styled-components";

export const InputTelephone = styled.input`
  display: block;
  width: 255px;
  padding: 0 30px;
  height: 54px;
  border: 1px solid rgba(56, 56, 56, 0.1);
  border-radius: 50px;

  & textarea {
    border: 0;
    color: inherit;
    outline: 0;
    list-style: none;
    box-shadow: none;
    background: 0 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  @media (max-width: 575px) {
    width: 100%;
  }
`;
