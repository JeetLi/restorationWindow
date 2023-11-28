import Container from "../../common/Container";
import {
  BenefitsSection,
  BenefitsTitle,
  BenefitsWrapper,
  BenefitsItem,
  BenefitsItemTop,
  BenefitsItemTitle,
  BenefitsItemNumber,
  BenefitsItemText,
} from "./styles";

interface Benefits {
  Title: string;
  BenefitsItemNumberOne: string;
  BenefitsTitleOne: string;
  BenefitsTextOne: string;
  BenefitsItemNumberTwo: string;
  BenefitsTitleTwo: string;
  BenefitsTextTwo: string;
  BenefitsItemNumberThree: string;
  BenefitsTitleThree: string;
  BenefitsTextThree: string;
  BenefitsItemNumberFour: string;
  BenefitsTitleFour: string;
  BenefitsTextFour: string;
  BenefitsItemNumberFive: string;
  BenefitsTitleFive: string;
  BenefitsTextFive: string;
  BenefitsItemNumberSix: string;
  BenefitsTitleSix: string;
  BenefitsTextSix: string;
}

const Benefits = ({
  Title,
  BenefitsItemNumberOne,
  BenefitsTitleOne,
  BenefitsTextOne,
  BenefitsItemNumberTwo,
  BenefitsTitleTwo,
  BenefitsTextTwo,
  BenefitsItemNumberThree,
  BenefitsTitleThree,
  BenefitsTextThree,
  BenefitsItemNumberFour,
  BenefitsTitleFour,
  BenefitsTextFour,
  BenefitsItemNumberFive,
  BenefitsTitleFive,
  BenefitsTextFive,
  BenefitsItemNumberSix,
  BenefitsTitleSix,
  BenefitsTextSix,
}: Benefits) => {
  return (
    <BenefitsSection>
      <Container>
        <BenefitsTitle>{Title}</BenefitsTitle>
        <BenefitsWrapper>
          <BenefitsItem>
            <BenefitsItemTop>
              <BenefitsItemNumber>{BenefitsItemNumberOne}</BenefitsItemNumber>
              <BenefitsItemTitle>{BenefitsTitleOne}</BenefitsItemTitle>
            </BenefitsItemTop>
            <BenefitsItemText>{BenefitsTextOne}</BenefitsItemText>
          </BenefitsItem>
          <BenefitsItem>
            <BenefitsItemTop>
              <BenefitsItemNumber>{BenefitsItemNumberTwo}</BenefitsItemNumber>
              <BenefitsItemTitle>{BenefitsTitleTwo}</BenefitsItemTitle>
            </BenefitsItemTop>
            <BenefitsItemText>{BenefitsTextTwo}</BenefitsItemText>
          </BenefitsItem>
          <BenefitsItem>
            <BenefitsItemTop>
              <BenefitsItemNumber>{BenefitsItemNumberThree}</BenefitsItemNumber>
              <BenefitsItemTitle>{BenefitsTitleThree}</BenefitsItemTitle>
            </BenefitsItemTop>
            <BenefitsItemText>{BenefitsTextThree}</BenefitsItemText>
          </BenefitsItem>
          <BenefitsItem>
            <BenefitsItemTop>
              <BenefitsItemNumber>{BenefitsItemNumberFour}</BenefitsItemNumber>
              <BenefitsItemTitle>{BenefitsTitleFour}</BenefitsItemTitle>
            </BenefitsItemTop>
            <BenefitsItemText>{BenefitsTextFour}</BenefitsItemText>
          </BenefitsItem>
          <BenefitsItem>
            <BenefitsItemTop>
              <BenefitsItemNumber>{BenefitsItemNumberFive}</BenefitsItemNumber>
              <BenefitsItemTitle>{BenefitsTitleFive}</BenefitsItemTitle>
            </BenefitsItemTop>
            <BenefitsItemText>{BenefitsTextFive}</BenefitsItemText>
          </BenefitsItem>
          <BenefitsItem>
            <BenefitsItemTop>
              <BenefitsItemNumber>{BenefitsItemNumberSix}</BenefitsItemNumber>
              <BenefitsItemTitle>{BenefitsTitleSix}</BenefitsItemTitle>
            </BenefitsItemTop>
            <BenefitsItemText>{BenefitsTextSix}</BenefitsItemText>
          </BenefitsItem>
        </BenefitsWrapper>
      </Container>
    </BenefitsSection>
  );
};

export default Benefits;
