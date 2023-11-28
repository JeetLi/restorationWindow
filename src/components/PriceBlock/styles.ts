import styled from "styled-components";

export const PriceSection = styled.section`
  padding-bottom: 90px;
  padding-top: 90px;

  @media (max-width: 1199px) {
    padding-bottom: calc(30px + 60 * ((100vw - 320px) / 1600));
    padding-top: calc(30px + 60 * ((100vw - 320px) / 1600));
  }
`;
export const PriceMainTitle = styled.h1`
  margin-bottom: 75px;
  font-size: 42px;
  line-height: calc(50 / 42);

  @media (max-width: 1199px) {
    margin-bottom: calc(25px + 50 * ((100vw - 320px) / 1600));
    font-size: calc(25px + 17 * ((100vw - 320px) / 1600));
  }
`;

export const GreenSpan = styled.p`
  padding: 0 10px;
  color: #25a94d;
  font-weight: 800;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: right;
  flex-basis: 140px;
  font-size: 26px;

  @media (max-width: 1199px) {
    flex-basis: calc(120px + 20 * ((100vw - 320px) / 1600));
    font-size: calc(20px + 6 * ((100vw - 320px) / 1600));
  }
`;

export const PriceTitle = styled.p`
  padding: 20px;
  font-size: 18px;
  flex: 1 1 auto;
  font-weight: 600;
  line-height: 1.3;
  color: rgba(56, 56, 56, 0.7);

  @media (max-width: 1199px) {
    font-size: calc(16px + 2 * ((100vw - 320px) / 1600));
  }
`;
export const PriceItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  --gap: 30px;
  gap: var(--gap);

  @media (max-width: 1199px) {
    --gap: 20px;
  }

  @media (max-width: 767px) {
    --gap: 15px;
  }

  @media (max-width: 575px) {
    --gap: 10px;
  }
`;

export const PriceItem = styled.div`
  position: relative;
  z-index: 0;
  width: calc(33.33333% - var(--gap) / 3 * 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-height: 142px;
  background: #f5f5f5;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: 0 0;
    transition: all 0.3s;
  }

  // &::after {
  //   content: "Вызвать мастера";
  //   left: 50%;
  //   top: 50%;
  //   z-index: 2;
  //   -webkit-transform: translate(-50%, -50%);
  //   transform: translate(-50%, -50%);
  //   width: 255px;
  //   height: 54px;
  //   justify-content: center;
  //   background: #1f8c40;
  //   border-radius: 50px;
  //   opacity: 0;
  //   font-size: 18px;
  //   color: #fff;
  //   transition: all 0.3s;

  //   @media (max-width: 1199px) {

  //     font-size: calc(15px + 3 * ((100vw - 320px) / 1600));
  //   }
  // }

  @media (max-width: 1199px) {
    min-height: calc(90px + 52 * ((100vw - 320px) / 1600));
  }

  @media (max-width: 991px) {
    width: calc(50% - var(--gap) / 2 * 1);
  }

  @media (max-width: 767px) {
    min-height: auto;
    width: calc(100% - var(--gap) / 1 * 0);
  }
`;
export const PriceButtonWrapepr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;
