import styled from "styled-components";

export const BenefitsSection = styled.section`
padding-bottom: 90px;
padding-top: 90px;
padding-left
margin 0 auto;
background: #f5f5f5;
padding: 90px 10px;

@media (max-width: 1199px) {
padding-bottom: calc(30px + 60*((100vw - 320px)/1600));
padding-top: calc(30px + 60*((100vw - 320px)/1600));
}
`;

export const BenefitsTitle = styled.h1`
  margin-bottom: 75px;
  font-size: 42px;
  line-height: calc(50 / 42);

  @media (max-width: 1199px) {
    margin-bottom: calc(25px + 50 * ((100vw - 320px) / 1600));
    font-size: calc(25px + 17 * ((100vw - 320px) / 1600));
  }
`;
export const BenefitsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  --gap: 120px;
  gap: var(--gap);

  @media (max-width: 1199px) {
    --gap: 80px;
  }

  @media (max-width: 991px) {
    --gap: 60px;
  }

  @media (max-width: 767px) {
    --gap: 30px;
  }

  @media (max-width: 575px) {
    --gap: 20px;
  }
`;
export const BenefitsItem = styled.div`
  width: calc(33.33333% - var(--gap) / 3 * 2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin: 0 auto;
  }

  @media (max-width: 991px) {
    width: calc(50% - var(--gap) / 2 * 1);
  }

  @media (max-width: 767px) {
    width: calc(100% - var(--gap) / 1 * 0);
  }
`;
export const BenefitsItemTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  flex: 1 1 auto;

  @media (max-width: 1199px) {
    margin-bottom: calc(15px + 25 * ((100vw - 320px) / 1600));
  }
`;
export const BenefitsItemTitle = styled.p`
  font-weight: 700;
  color: #383838;
  font-size: 24px;
  line-height: calc(29 / 24);

  @media (max-width: 1199px) {
    font-size: calc(17px + 7 * ((100vw - 320px) / 1600));
  }
`;

export const BenefitsItemNumber = styled.p`
  font-size: 64px;
  // color: transparent;
  color: green;
  -webkit-text-stroke: 1px #c8c8c8;
  line-height: 0.9;

  @media (max-width: 1199px) {
    font-size: calc(45px + 19 * ((100vw - 320px) / 1600));
  }
`;
export const BenefitsItemText = styled.p`
  font-size: 16px;
  color: rgba(56, 56, 56, 0.7);
  line-height: 1.42;

  @media (max-width: 1199px) {
    font-size: calc(15px + 1 * ((100vw - 320px) / 1600));
  }
`;
