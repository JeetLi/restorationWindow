import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  width: 430px;
  padding: 0 10px;

  @media (min-width: 576px) {
    width: 520px;
    padding: 0;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1110px;
  }

  &::before {
    box-sizing: border-box;
    outline: 0;
  }

  &::after {
    box-sizing: border-box;
    outline: 0;
  }
`;
