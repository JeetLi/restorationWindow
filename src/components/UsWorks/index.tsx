import Container from "../../common/Container";
import { GreenSpan } from "../Block/styles";
import {
  UsWorksSection,
  UsWorkWrapper,
  UsWorkTitle,
  UsWorkLeftContainer,
  UsWorkImageWrapper,
  FirstDoImg,
  UsWorkText,
  SecondAfterImg,
  UsWorkRightContainer,
  UsWorkUl,
  UsWorkGreenTitle,
  UsWorkSecondGreenTitle,
  UsWorkMaterialWrapper,
  UsWorkMaterialItem,
  UsWorkMaterialImgFirst,
  UsWorkMaterialImgSecond,
  UsWorkMaterialImgThree,
  UsWorkSubText,
} from "./styles";

interface UsWorksProps {
  Title: string;
  GreenTitle: string;
  UsWorkTextOne: string;
  UsWorkTextTwoPartOne: string;
  UsWorkTextTwoPartTwo: string;
  UsWorkTextTwoPartThree: string;
  UsWorkTextThree: string;
  UsWorkTextFour: string;
  UsWorkTextFive: string;
  UsWorkTextSix: string;
  UsWorkTextSeven: string;
  UsWorkTextSevenPartTwo: string;
  UsWorkTextEight: string;
  UsWorkTextNine: string;
  UsWorkTextTen: string;
  UsWorkTextTenPartTwo: string;
  UsWorkTextTenPartThree: string;
  UsWorkTextEleven: string;
  UsWorkTextElevenPartTwo: string;
  UsWorkTextTwelve: string;
  UsWorkTextThirteen: string;
  SecondGreenTitle: string;
  MaterialItemOne: string;
  MaterialItemTwo: string;
  MaterialItemThree: string;
}

const UsWorks = ({
  Title,
  GreenTitle,
  UsWorkTextOne,
  UsWorkTextTwoPartOne,
  UsWorkTextTwoPartTwo,
  UsWorkTextTwoPartThree,
  UsWorkTextThree,
  UsWorkTextFour,
  UsWorkTextFive,
  UsWorkTextSix,
  UsWorkTextSeven,
  UsWorkTextSevenPartTwo,
  UsWorkTextEight,
  UsWorkTextNine,
  UsWorkTextTen,
  UsWorkTextTenPartTwo,
  UsWorkTextTenPartThree,
  UsWorkTextEleven,
  UsWorkTextElevenPartTwo,
  UsWorkTextTwelve,
  UsWorkTextThirteen,
  SecondGreenTitle,
  MaterialItemOne,
  MaterialItemTwo,
  MaterialItemThree,
}: UsWorksProps) => {
  return (
    <UsWorksSection>
      <Container>
        <UsWorkTitle>{Title}</UsWorkTitle>
        <UsWorkWrapper>
          <UsWorkLeftContainer>
            <UsWorkImageWrapper>
              <FirstDoImg alt="firstDo" src="./img/usPhoto/firstDo.png" />
              <SecondAfterImg
                alt="firstAfter"
                src="./img/usPhoto/firstAfter.png"
              />
            </UsWorkImageWrapper>
            <UsWorkImageWrapper>
              <FirstDoImg alt="secondDo" src="./img/usPhoto/secondDo.png" />
              <SecondAfterImg
                alt="secondAfter"
                src="./img/usPhoto/secondAfter.png"
              />
            </UsWorkImageWrapper>
            <UsWorkImageWrapper>
              <FirstDoImg alt="threeDo" src="./img/usPhoto/threeDo.png" />
              <SecondAfterImg
                alt="threeAfter"
                src="./img/usPhoto/threeAfter.png"
              />
            </UsWorkImageWrapper>
          </UsWorkLeftContainer>
          <UsWorkRightContainer>
            <UsWorkUl>
              <li>
                <UsWorkGreenTitle>{GreenTitle}</UsWorkGreenTitle>
              </li>
              <li>
                <UsWorkText>{UsWorkTextOne}</UsWorkText>
              </li>
              <li>
                <UsWorkText>
                  {UsWorkTextTwoPartOne}
                  <GreenSpan>{UsWorkTextTwoPartTwo}</GreenSpan>
                  {UsWorkTextTwoPartThree}{" "}
                </UsWorkText>
              </li>
              <li>
                {" "}
                <UsWorkText>{UsWorkTextThree}</UsWorkText>
              </li>
              <li>
                {" "}
                <UsWorkText>{UsWorkTextFour}</UsWorkText>
              </li>
              <li>
                {" "}
                <UsWorkText>{UsWorkTextFive}</UsWorkText>
              </li>
              <li>
                <UsWorkText>{UsWorkTextSix}</UsWorkText>
              </li>
              <li>
                <UsWorkText>
                  {UsWorkTextSeven}
                  <GreenSpan>{UsWorkTextSevenPartTwo}</GreenSpan>
                </UsWorkText>
              </li>
              <li>
                <UsWorkText>{UsWorkTextEight}</UsWorkText>
              </li>
              <li>
                <UsWorkText>{UsWorkTextNine}</UsWorkText>
              </li>
              <li>
                <UsWorkText>
                  {UsWorkTextTen}
                  <GreenSpan>{UsWorkTextTenPartTwo}</GreenSpan>
                  {UsWorkTextTenPartThree}
                </UsWorkText>
              </li>
              <li>
                {" "}
                <UsWorkText>
                  {UsWorkTextEleven}
                  <GreenSpan>{UsWorkTextElevenPartTwo}</GreenSpan>
                </UsWorkText>
              </li>
              <li>
                <UsWorkText>{UsWorkTextTwelve}</UsWorkText>
              </li>
              <li>
                <UsWorkText>{UsWorkTextThirteen}</UsWorkText>
              </li>
            </UsWorkUl>
            <UsWorkSecondGreenTitle>{SecondGreenTitle}</UsWorkSecondGreenTitle>
            <UsWorkMaterialWrapper>
              <UsWorkMaterialItem>
                <UsWorkMaterialImgFirst
                  alt="eurostrip"
                  src="./img/usPhoto/eurostrip.png"
                />
                <UsWorkSubText>{MaterialItemOne}</UsWorkSubText>
              </UsWorkMaterialItem>
              <UsWorkMaterialItem>
                <UsWorkMaterialImgSecond
                  alt="dufa"
                  src="./img/usPhoto/dufa.png"
                />
                <UsWorkSubText> {MaterialItemTwo}</UsWorkSubText>
              </UsWorkMaterialItem>
              <UsWorkMaterialItem>
                <UsWorkMaterialImgThree
                  alt="maco"
                  src="./img/usPhoto/maco.png"
                />
                <UsWorkSubText>{MaterialItemThree} </UsWorkSubText>
              </UsWorkMaterialItem>
            </UsWorkMaterialWrapper>
          </UsWorkRightContainer>
        </UsWorkWrapper>
      </Container>
    </UsWorksSection>
  );
};

export default UsWorks;
