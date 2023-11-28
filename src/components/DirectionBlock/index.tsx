import { useState } from "react";
import Container from "../../common/Container";
import { DirectionButton } from "../../common/DirectionButton";
import { GreenSpan } from "../Block/styles";
import {
  DirectionBlockSection,
  DirectionMainTitle,
  WrapperDirection,
  WrapperWoodDirection,
  WrapperPlasticDirection,
  DirectionSecondTitle,
  PriceWrapper,
  LeftButtonsWrapper,
  DirectionSubTitle,
  Description,
  RightImgWrapper,
  WindowImg,
  ButtonsWrapper,
  DirectionButtonStyle,
  HoverDirectionButton
} from "./styles";

interface DirectionBlockProps {
  MainTitle: string;
  WoodDirectionOne: string;
  WoodDirectionTwo: string;
  WoodDirectionThree: string;
  WoodDirectionFour: string;
  PlasticDirectionOne: string;
  PlasticDirectionTwo: string;
  PlasticDirectionThree: string;
  PlasticDirectionFour: string;
  SecondTitle: string;
  SubTitle: string;
  WoodButtonOne: string;
  WoodButtonTwo: string;
  WoodButtonThree: string;
  PlasticButtonOne: string;
  PlasticButtonTwo: string;
  PlasticButtonThree: string;
  DescGreen: string;
  PriceStepOne: string;
  Desc: string;
}

const DirectionBlock = ({
  MainTitle,
  WoodDirectionOne,
  WoodDirectionTwo,
  WoodDirectionThree,
  WoodDirectionFour,
  PlasticDirectionOne,
  PlasticDirectionTwo,
  PlasticDirectionThree,
  PlasticDirectionFour,
  SecondTitle,
  SubTitle,
  WoodButtonOne,
  WoodButtonTwo,
  WoodButtonThree,
  PlasticButtonOne,
  PlasticButtonTwo,
  PlasticButtonThree,
  DescGreen,
  PriceStepOne,
  Desc,
}: DirectionBlockProps) => {
  const [image, setImage] = useState("./img/okno1.png");
  const [price, setPrice] = useState("10.500 руб.");

  return (
    <DirectionBlockSection>
      <Container>
        <DirectionMainTitle>{MainTitle}</DirectionMainTitle>
        <WrapperWoodDirection>
          <DirectionButton background="rgba(176, 138, 81, 0.89);">
            <DirectionButtonStyle>{WoodDirectionOne}</DirectionButtonStyle>
          </DirectionButton>
          <DirectionButton background="rgba(176, 138, 81, 0.89)">
            <DirectionButtonStyle> {WoodDirectionTwo}</DirectionButtonStyle>
          </DirectionButton>
          <DirectionButton background="rgba(176, 138, 81, 0.89)">
            <DirectionButtonStyle> {WoodDirectionThree}</DirectionButtonStyle>
          </DirectionButton>
          <DirectionButton background="rgba(176, 138, 81, 0.89)">
            <DirectionButtonStyle> {WoodDirectionFour}</DirectionButtonStyle>
          </DirectionButton>
        </WrapperWoodDirection>
        <WrapperPlasticDirection>
          <DirectionButton background="rgba(226, 226, 226, 0.89)">
            <DirectionButtonStyle> {PlasticDirectionOne}</DirectionButtonStyle>
          </DirectionButton>
          <DirectionButton background="rgba(226, 226, 226, 0.89)">
            <DirectionButtonStyle> {PlasticDirectionTwo}</DirectionButtonStyle>
          </DirectionButton>
          <DirectionButton background="rgba(226, 226, 226, 0.89)">
            <DirectionButtonStyle>
              {PlasticDirectionThree}
            </DirectionButtonStyle>
          </DirectionButton>
          <DirectionButton background="rgba(226, 226, 226, 0.89)">
            <DirectionButtonStyle> {PlasticDirectionFour}</DirectionButtonStyle>
          </DirectionButton>
        </WrapperPlasticDirection>
        <DirectionSecondTitle>{SecondTitle}</DirectionSecondTitle>
        <PriceWrapper>
          <LeftButtonsWrapper>
            <DirectionSubTitle>{SubTitle}</DirectionSubTitle>
            <ButtonsWrapper>
              <WrapperWoodDirection flexDirection="column">
                <HoverDirectionButton
                  background="rgba(176, 138, 81, 0.89);"
                  onClick={() => {
                    setImage("./img/okno1.png");
                    setPrice("10.500 руб.");
                  }}
                >
                  <DirectionButtonStyle>{WoodButtonOne}</DirectionButtonStyle>
                </HoverDirectionButton>
                <HoverDirectionButton
                  background="rgba(176, 138, 81, 0.89);"
                  onClick={() => {
                    setImage("./img/okno2.png");
                    setPrice("13.500 руб.");
                  }}
                >
                  <DirectionButtonStyle>{WoodButtonTwo}</DirectionButtonStyle>
                </HoverDirectionButton>
                <HoverDirectionButton
                  background="rgba(176, 138, 81, 0.89);"
                  onClick={() => {
                    setImage("./img/okno3.png");
                    setPrice("14.500 руб.");
                  }}
                >
                  <DirectionButtonStyle>{WoodButtonThree}</DirectionButtonStyle>
                </HoverDirectionButton>
              </WrapperWoodDirection>
              <WrapperPlasticDirection margin-top="0" flexDirection="column">
                <HoverDirectionButton
                  background="rgba(226, 226, 226, 0.89)"
                  onClick={() => {
                    setImage("./img/okno1.png");
                    setPrice("11.200 руб.");
                  }}
                >
                  <DirectionButtonStyle>
                    {PlasticButtonOne}
                  </DirectionButtonStyle>
                </HoverDirectionButton>
                <HoverDirectionButton
                  background="rgba(226, 226, 226, 0.89)"
                  onClick={() => {
                    setImage("./img/okno2.png");
                    setPrice("13.100 руб.");
                  }}
                >
                  <DirectionButtonStyle>
                    {PlasticButtonTwo}
                  </DirectionButtonStyle>
                </HoverDirectionButton>
                <HoverDirectionButton
                  background="rgba(226, 226, 226, 0.89)"
                  onClick={() => {
                    setImage("./img/okno3.png");
                    setPrice("14.500 руб.");
                  }}
                >
                  <DirectionButtonStyle>
                    {" "}
                    {PlasticButtonThree}
                  </DirectionButtonStyle>
                </HoverDirectionButton>
              </WrapperPlasticDirection>
            </ButtonsWrapper>
            <Description>
              <PriceWrapper>
                <GreenSpan>{PriceStepOne}</GreenSpan>
                {price}
              </PriceWrapper>
              <GreenSpan>{DescGreen}</GreenSpan>
              {Desc}
            </Description>
          </LeftButtonsWrapper>
          <RightImgWrapper>
            <WindowImg src={image} />
          </RightImgWrapper>
        </PriceWrapper>
      </Container>
    </DirectionBlockSection>
  );
};

export default DirectionBlock;
