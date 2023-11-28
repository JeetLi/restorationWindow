
import styled from "styled-components";
import { StyledButton } from "../../common/DirectionButton/styles";

interface WrapperWoodDirectionProps {
  flexDirection?: "row" | "column";
  marginTop?: "0" | "2%";
}

export const HoverDirectionButton = styled(StyledButton)`
cursor: pointer;
transition: filter 0.3s ease;

&:hover {
  filter: brightness(80%);
}
`;

export const DirectionBlockSection = styled.section`
  padding-top: 90px;
`;
export const DirectionMainTitle = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
`;
export const WrapperDirection = styled.div``;
export const WrapperWoodDirection = styled.div<WrapperWoodDirectionProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;
export const WrapperPlasticDirection = styled.div<WrapperWoodDirectionProps>`
  margin-top: ${(props) => props.flexDirection || "2%"};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;
export const DirectionSecondTitle = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;
export const LeftButtonsWrapper = styled.div``;
export const DirectionSubTitle = styled.h3`
  max-width: 80%;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Description = styled.div`
  max-width: 80%;
  color: rgba(0, 0, 0, 0.8);
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 30px;

  @media (max-width: 575px) {
    max-width: 100%;
    padding-bottom: 30px;
    text-align: center;
  }
`;
export const RightImgWrapper = styled.div`
  min-width: 400px;

  @media (max-width: 769px) {
    min-width: 300px;
  }

  @media (max-width: 575px) {
    display: flex;
    justify-content: center;
  }
`;
export const WindowImg = styled.img`
  @media (max-width: 1199px) {
    padding-bottom: 15%;
  }
  @media (max-width: 999px) {
    padding-bottom: 15%;
  }

  @media (max-width: 769px) {
    max-width: 70%;
    max-height: 70%;
    padding-left: 10%;
    padding-bottom: 15%;
  }

  @media (max-width: 575px) {
    item-align: center;
    max-width: 70%;
    max-height: 70%;
    padding-left: 0%;
    padding-bottom: 0%;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  margin-right: 5%;
`;

export const DirectionButtonStyle = styled.p<any>`
  color: ${(props) => props.color || "rgba(0, 0, 0, 0.8)"};
  text-align: center;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
