import {
  ServicesSection,
  GreenSpan,
  ServicesTitle,
  ServicesWrapper,
  GreenItem,
  GreenItemTitle,
  GreenText,
  ServicesItem,
  ServicesItemGrey,
  ServicesImg,
  PCastom,
} from "./styles";
import Container from "../../common/Container/index";

interface Services {
  Title: string;
  GreenTitle: string;
  GreenDesc: string;
  repairWindowTitle: string;
  repairWindowtDesc: string;
  adjustmentTitle: string;
  adjustmentDesc: string;
  changeAccessoriesTitle: string;
  changeAccessoriesDesc: string;
  sealingTitle: string;
  sealingDesc: string;
  glassUnitTitle: string;
  glassUnitDesc: string;
  TamperProofTitle: string;
  TamperProofDesc: string;
  doorknobTitle: string;
  doorknobDesc: string;
  changeSealTitle: string;
  changeSealTitle2: string;
  changeSealDesc: string;
  mosquitoNetsTitle: string;
  mosquitoNetsDesc: string;
  blindTitle: string;
  blindDesc: string;
  saleTitle: string;
}

const Services = ({
  Title,
  GreenTitle,
  GreenDesc,
  repairWindowTitle,
  repairWindowtDesc,
  adjustmentTitle,
  adjustmentDesc,
  changeAccessoriesTitle,
  changeAccessoriesDesc,
  sealingTitle,
  sealingDesc,
  glassUnitTitle,
  glassUnitDesc,
  TamperProofTitle,
  TamperProofDesc,
  doorknobTitle,
  doorknobDesc,
  changeSealTitle,
  changeSealTitle2,
  changeSealDesc,
  mosquitoNetsTitle,
  mosquitoNetsDesc,
  blindTitle,
  blindDesc,
  saleTitle,
}: Services) => {
  return (
    <ServicesSection>
      <Container>
        <ServicesTitle>{Title}</ServicesTitle>
        <ServicesWrapper>
          <GreenItem>
            <GreenItemTitle>{GreenTitle}</GreenItemTitle>
            <GreenText>{GreenDesc}</GreenText>
          </GreenItem>
          <ServicesItemGrey>
            <p>{repairWindowTitle}</p>
            <GreenSpan>{repairWindowtDesc}</GreenSpan>
            <ServicesImg src="./img/bg/1.webp" />
          </ServicesItemGrey>
          <ServicesItem>
            <p>{adjustmentTitle} </p>
            <GreenSpan>{adjustmentDesc}</GreenSpan>
            <ServicesImg src="./img/bg/2.webp" />
          </ServicesItem>
          <ServicesItemGrey>
            <p>{glassUnitTitle}</p>
            <GreenSpan>{glassUnitDesc}</GreenSpan>
            <ServicesImg src="./img/bg/5.webp" />
          </ServicesItemGrey>
          <ServicesItem>
            <p>{changeAccessoriesTitle}</p>
            <GreenSpan>{changeAccessoriesDesc}</GreenSpan>
            <ServicesImg src="./img/bg/3.webp" />
          </ServicesItem>
          <ServicesItemGrey>
            <p>{doorknobTitle} </p>
            <GreenSpan>{doorknobDesc}</GreenSpan>
            <ServicesImg src="./img/bg/7.webp" />
          </ServicesItemGrey>
          <ServicesItem>
            <p>{TamperProofTitle}</p>
            <GreenSpan>{TamperProofDesc}</GreenSpan>
            <ServicesImg src="./img/bg/6.webp" />
          </ServicesItem>
          <ServicesItemGrey>
            <PCastom>
              {changeSealTitle}
              {changeSealTitle2}
            </PCastom>
            <GreenSpan> {changeSealDesc}</GreenSpan>
            <ServicesImg src="./img/bg/8.webp" />
          </ServicesItemGrey>
          <ServicesItem>
            <p>{sealingTitle} </p>
            <GreenSpan>{sealingDesc}</GreenSpan>
            <ServicesImg src="./img/bg/4.webp" />
          </ServicesItem>
          <ServicesItemGrey>
            <p>{blindTitle}</p>
            <GreenSpan> {blindDesc}</GreenSpan>
            <ServicesImg src="./img/bg/10.webp" />
          </ServicesItemGrey>
          <ServicesItem>
            <p>{mosquitoNetsTitle}</p>
            <GreenSpan> {mosquitoNetsDesc}</GreenSpan>
            <ServicesImg src="./img/bg/9.webp" />
          </ServicesItem>
          <GreenItem>
            <GreenItemTitle>{saleTitle}</GreenItemTitle>
          </GreenItem>
        </ServicesWrapper>
      </Container>
    </ServicesSection>
  );
};

export default Services;
