import Container from "../../common/Container";
import {
  FooterSection,
  FooterWrapper,
  FooterYear,
  FooterEmail,
  FooterLeftContainer,
  FooterRightContent,
  FooterSubtitle,
  FooterTel,
  LowerContainer,
  LowerTitle,
  LowerSubTitle,
} from "./styles";

interface Footer {
  Year: string;
  Email: string;
  FooterNumber: string;
  Subtitle: string;
  LowerTitl: string;
  LowerSub: string;
}

const Footer = ({
  Year,
  Email,
  FooterNumber,
  Subtitle,
  LowerTitl,
  LowerSub,
}: Footer) => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper>
          <LowerContainer href="https://yandex.by/maps/-/CDUv5Xnr">
            <LowerTitle> {LowerTitl}</LowerTitle>
            <LowerSubTitle>{LowerSub}</LowerSubTitle>
          </LowerContainer>
          <FooterLeftContainer href="tel:+74997148169">
            <FooterTel>{FooterNumber}</FooterTel>
            <FooterEmail>{Email}</FooterEmail>
          </FooterLeftContainer>
          <FooterRightContent>
            <FooterYear>{Year}</FooterYear>
            <FooterSubtitle>{Subtitle}</FooterSubtitle>
          </FooterRightContent>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};

export default Footer;
