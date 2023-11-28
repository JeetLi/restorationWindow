import Container from "../../common/Container";
import {
  ConsultationSection,
  ConsultationWrapper,
  ConsultationWrapperLeft,
  ConsultationTitle,
  ConsultationText,
  ColsultationFormWrapper,
  ConsultationForm,
  SellerMan,
} from "./styles";
import { DescriptionForm } from "../Block/styles";
import { Button } from "../../common/Button";
import InputNumber from "../../common/InputNumber";
import Form from "../../common/Form";

interface Consultation {
  Title: string;
  Text: string;
  ButtonText: string;
  DescForm: string;
  onClick: () => void;
}

const Consultation = ({
  onClick,
  Title,
  Text,
  ButtonText,
  DescForm,
}: Consultation) => {
  return (
    <ConsultationSection>
      <Container>
        <ConsultationWrapper>
          <ConsultationWrapperLeft>
            <ConsultationTitle>{Title}</ConsultationTitle>
            <ConsultationText>{Text}</ConsultationText>
            <ColsultationFormWrapper>
              <ConsultationForm>
                <Form onClick={onClick} ButtonName={ButtonText} />
                <DescriptionForm>{DescForm}</DescriptionForm>
              </ConsultationForm>
            </ColsultationFormWrapper>
          </ConsultationWrapperLeft>
          <SellerMan alt="sellerMan" src="./img/bg/offer-img.webp" />
        </ConsultationWrapper>
      </Container>
    </ConsultationSection>
  );
};

export default Consultation;
