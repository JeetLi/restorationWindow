import styled from "styled-components";

export const UsSocialSection = styled.section`
  margin-top: 100px;
`;
export const UsSocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const UsSocialItem = styled.div`
  display: flex;
  align-items: center;
`;

export const UsSocialText = styled.p`
  margin-left: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const UsSocialIcon = styled.img`
  width: 25px;
  height: 25px;
`;
