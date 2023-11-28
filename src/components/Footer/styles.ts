import styled from "styled-components";

export const FooterSection = styled.section``;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  // align-items: center;
  flex-wrap: wrap;
  color: rgba(56, 56, 56, 0.7);

  @media (max-width: 999px) {
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: normal;
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 575px) {
    gap: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FooterLeftContainer = styled.a`
  color: rgba(56, 56, 56, 0.7);

  @media (max-width: 575px) {
    display: flex;
    gap: 10px;
  }
`;

export const FooterRightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 575px) {
    align-items: center;
  }
`;
export const FooterSubtitle = styled.p`
  direction: rtl;
  margin: 0 auto;
  font-size: 14px;
  @media (max-width: 991px) {
    max-width: 500px;
  }

  @media (max-width: 575px) {
    max-width: 256px;
    direction: ltr;
  }
`;
export const FooterYear = styled.p`
  font-size: 14px;
`;
export const FooterNumber = styled.div`
  color: #25a94d;
`;
export const FooterEmail = styled.p`
  font-size: 14px;
`;
export const FooterTel = styled.p`
  font-size: 14px;
`;

export const LowerContainer = styled.a`
  color: rgba(56, 56, 56, 0.7);
`;
export const LowerTitle = styled.p`
  // margin-top:15px;
  // margin-bottom:15px;
  // color: rgba(56, 56, 56, 0.7);
  font-size: 14px;
`;
export const LowerSubTitle = styled.p`
  font-size: 14px;
`;

export const FooterHrefTel = styled.a`
  color: rgba(56, 56, 56, 0.7);
`;
