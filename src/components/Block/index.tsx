import {
  BlockSection,
  BlockContainer,
  BlockTitle,
  GreenSpan,
  BlockContainerLeft,
  BlockList,
  BlockListItem,
  BlockListItemText,
  BlockListSecurity,
  BlockListTruck,
  BlockListlike,
  BlockForm,
  BlockFormTitle,
  // DefaultSpan,
  // InputWrapper,
  DescriptionForm,
} from "./styles";
import { Button } from "../../common/Button";
import Container from "../../common/Container";
import InputNumber from "../../common/InputNumber";
import Form from "../../common/Form";

interface Block {
  TitleStepOne: string;
  SpanStep: string;
  TitleStepTwo: string;
  TruckTextOne: string;
  TruckTextTwo: string;
  TruckTextFree: string;
  SecurityTextOne: string;
  SecurityTextTwo: string;
  SecurityTextThree: string;
  LikeTextOne: string;
  LikeTextTwo: string;
  LikeTextThree: string;
  LikeTextFour: string;
  LikeTextFive: string;
  BlockFormTitl: string;
  DescForm: string;
  onClick: () => void;
  ButtonName: string;
}

const Block = ({
  onClick,
  ButtonName,
  TitleStepOne,
  SpanStep,
  TitleStepTwo,
  TruckTextOne,
  TruckTextTwo,
  TruckTextFree,
  SecurityTextOne,
  SecurityTextTwo,
  SecurityTextThree,
  LikeTextOne,
  LikeTextTwo,
  LikeTextThree,
  LikeTextFour,
  LikeTextFive,
  BlockFormTitl,
  DescForm,
}: Block) => {
  return (
    <BlockSection>
      <BlockContainer>
        <Container>
          <BlockContainerLeft>
            <BlockTitle>
              {TitleStepOne}
              <GreenSpan>{SpanStep}</GreenSpan>
              {TitleStepTwo}
            </BlockTitle>
            <BlockList>
              <BlockListItem>
                <BlockListTruck>
                  <img width={"100%"} src="./img/icons/truck48.png" />
                </BlockListTruck>
                <BlockListItemText>
                  {TruckTextOne}
                  <GreenSpan>{TruckTextTwo}</GreenSpan>
                  {TruckTextFree}
                </BlockListItemText>
              </BlockListItem>
              <BlockListItem>
                <BlockListSecurity>
                  <img width={"100%"} src="./img/icons/protect48.png" />
                </BlockListSecurity>
                <BlockListItemText>
                  {SecurityTextOne}
                  <GreenSpan>{SecurityTextTwo}</GreenSpan>
                  {SecurityTextThree}
                </BlockListItemText>
              </BlockListItem>
              <BlockListItem>
                <BlockListlike>
                  <img width={"100%"} src="./img/icons/like48.png" />
                </BlockListlike>
                <BlockListItemText>
                  {LikeTextOne}
                  <GreenSpan>{LikeTextTwo}</GreenSpan>
                  {LikeTextThree}
                  <GreenSpan>{LikeTextFour}</GreenSpan>
                  {LikeTextFive}
                </BlockListItemText>
              </BlockListItem>
              <BlockForm>
                <BlockFormTitle>{BlockFormTitl}</BlockFormTitle>
                <Form onClick={onClick} ButtonName={ButtonName} />
                <DescriptionForm>{DescForm}</DescriptionForm>
              </BlockForm>
            </BlockList>
          </BlockContainerLeft>
        </Container>
      </BlockContainer>
    </BlockSection>
  );
};

export default Block;
