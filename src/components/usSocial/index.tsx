import {
  UsSocialSection,
  UsSocialWrapper,
  UsSocialItem,
  UsSocialText,
  UsSocialIcon,
} from "./styles";
import Container from "../../common/Container/index";

interface UsSocialProps {
  telegramID: string;
  whatsAppNumber: string;
  viberNumber: string;
}

const UsSocial = ({
  telegramID,
  whatsAppNumber,
  viberNumber,
}: UsSocialProps) => {
  return (
    <>
      <UsSocialSection>
        <Container>
          <UsSocialWrapper>
            <a href="https://t.me/Alleya_okon">
              <UsSocialItem>
                <UsSocialIcon src="./img/icons/telegramIcon.png"></UsSocialIcon>
                <UsSocialText>{telegramID}</UsSocialText>
              </UsSocialItem>
            </a>
            <a href="https://wa.me/+79687339639">
              <UsSocialItem>
                <UsSocialIcon src="./img/icons/whatsAppIcon.png"></UsSocialIcon>
                <UsSocialText>{whatsAppNumber}</UsSocialText>
              </UsSocialItem>
            </a>
            <a href="viber://chat?number=89687339639">
              <UsSocialItem>
                <UsSocialIcon src="./img/icons/viberIcon.png"></UsSocialIcon>
                <UsSocialText>{viberNumber}</UsSocialText>
              </UsSocialItem>
            </a>
          </UsSocialWrapper>
        </Container>
      </UsSocialSection>
    </>
  );
};

export default UsSocial;
