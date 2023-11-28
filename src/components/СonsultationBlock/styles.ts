import styled from "styled-components";

export const ConsultationSection = styled.section`
  background: #f5f5f5;
`;
export const ConsultationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 25px;
`;
export const ConsultationWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 46px;

  @media (max-width: 575px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 1199px) {
    gap: calc(20px + 26 * ((100vw - 320px) / 1600));
  }
  @media (max-width: 1199px) {
    padding-bottom: calc(30px + 60 * ((100vw - 320px) / 1600));
    padding-top: calc(30px + 60 * ((100vw - 320px) / 1600));
  }
`;

export const ConsultationTitle = styled.h1`
  // margin-bottom: 75px;
  font-size: 42px;
  line-height: calc(50 / 42);
  max-width: 540px;

  @media (max-width: 575px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 1199px) {
    max-width: calc(300px + 240 * ((100vw - 320px) / 1600));
    margin-bottom: 0;
  }
  @media (max-width: 1199px) {
    // margin-bottom: calc(25px + 50 * ((100vw - 320px) / 1600));
    font-size: calc(25px + 17 * ((100vw - 320px) / 1600));
  }
`;
export const ConsultationText = styled.p`
  max-width: 460px;
  line-height: 1.42;
  font-size: 18px;
  color: rgba(56, 56, 56, 0.7);

  @media (max-width: 575px) {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: 1199px) {
    max-width: calc(300px + 160 * ((100vw - 320px) / 1600));
    font-size: calc(15px + 3 * ((100vw - 320px) / 1600));
  }
`;
export const ColsultationFormWrapper = styled.div`
  box-sizing: border-box;
  outline: 0;
`;
export const ConsultationForm = styled.div`
  box-sizing: border-box;
  outline: 0;
`;
export const SellerMan = styled.img`
  object-fit: contain;
  max-width: 410px;

  @media (max-width: 991px) {
    display: none;
  }

  @media (max-width: 1199px) {
    max-width: calc(250px + 160 * ((100vw - 320px) / 1600));
  }
`;
