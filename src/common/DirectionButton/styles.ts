import styled from "styled-components";

export const StyledButton = styled.button<any>`
  min-width: 254px;
  min-height: 54px;
  // padding: 10px 25px;
  margin: 15px;
  background: ${(props) => props.background || "none"};
  color: ${(props) => props.color || "black"};
  border-radius: 42px;
  border: 0;
  font-size: 18px;
  transition: all 0.3s;

  @media (max-width: 575px) {
    font-size: 12px;
    padding: 0 15px;
    min-width: 140px;
  }

  @media (max-width: 1199px) {
    min-height: calc(36px + 6 * ((100vw - 320px) / 1600));
    min-width: calc(140px + 40 * ((100vw - 320px) / 1600));
    font-size: calc(13px + 3 * ((100vw - 320px) / 1600));
  }
`;

