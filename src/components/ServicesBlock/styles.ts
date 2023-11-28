import styled from "styled-components";

export const ServicesSection = styled.section`
  padding-top: 0;
  padding-bottom: 90px;
  padding-top: 90px;

  @media (max-width: 1199px) {
    padding-top: 0;
    padding-bottom: calc(30px + 60 * ((100vw - 320px) / 1600));
    padding-top: calc(30px + 60 * ((100vw - 320px) / 1600));
  }

  @media (max-width: 991px) {
    padding-top: calc(30px + 24.3 * ((100vw - 320px) / 671));
  }
`;

export const GreenSpan = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #25a94d;

  @media (max-width: 1199px) {
    font-size: calc(15px + 3 * ((100vw - 320px) / 1600));
  }
`;
export const ServicesTitle = styled.h1`
  margin-bottom: 75px;
  font-size: 42px;
  line-height: calc(50 / 42);
  font-weight: 700;

  @media (max-width: 1199px) {
    margin-bottom: calc(25px + 50 * ((100vw - 320px) / 1600));
    font-size: calc(25px + 17 * ((100vw - 320px) / 1600));
  }
`;
export const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  --gap: 0px;

  p {
    flex: 1 1 auto;
    margin-bottom: 22px;
    max-width: 163px;
    font-weight: 500;
    font-size: 18px;
    line-height: calc(22 / 18);

    @media (max-width: 1199px) {
      margin-bottom: calc(15px + 7 * ((100vw - 320px) / 1600));
      max-width: calc(140px + 23 * ((100vw - 320px) / 1600));
      font-size: calc(16px + 2 * ((100vw - 320px) / 1600));
    }

    @media (max-width: 575px) {
      max-width: 100%;
    }
  }

`;

export const GreenItem = styled.div`
  background: #25a94d;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(25% - var(--gap) / 4 * 3);
  padding: 30px;

  p {
    color: #fff;
    z-index: 1;
  }

  span {
    z-index: 1;
    color: #fff;
    font-weight: 900;
  }

  @media (max-width: 1199px) {
    padding: calc(20px + 10 * ((100vw - 320px) / 1600));
    width: calc(33.33333% - var(--gap) / 3 * 2);
  }

  @media (max-width: 767px) {
    width: calc(50% - var(--gap) / 2 * 1);
  }

  @media (max-width: 575px) {
    width: calc(100% - var(--gap) / 1 * 0);
  }
`;

export const GreenText = styled.div`
  font-size: 16px;
  line-height: calc(23 / 16);

  @media (max-width: 1199px) {
    font-size: calc(14px + 2 * ((100vw - 320px) / 1600));
  }
`;

export const GreenItemTitle = styled.div`
  flex: 1 1 auto;
  margin-bottom: 22px;
  max-width: 163px;
  font-size: 18px;
  font-weight: 700;
  line-height: calc(22 / 18);
  margin-bottom: 10px;
  font-size: 18px;
  text-transform: uppercase;

  @media (max-width: 1199px) {
    font-size: calc(15px + 3 * ((100vw - 320px) / 1600));
    margin-bottom: calc(15px + 7 * ((100vw - 320px) / 1600));
    max-width: calc(140px + 23 * ((100vw - 320px) / 1600));
    font-size: calc(16px + 2 * ((100vw - 320px) / 1600));
  }

  @media (max-width: 575px) {
    max-width: 100%;
  }
`;

export const ServicesItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(25% - var(--gap) / 4 * 3);
  padding: 30px;

  span {
    font-weight: 500px;
  }

  @media (max-width: 1199px) {
    width: calc(33.33333% - var(--gap) / 3 * 2);
    padding: calc(20px + 10 * ((100vw - 320px) / 1600));
  }

  @media (max-width: 767px) {
    width: calc(50% - var(--gap) / 2 * 1);
  }

  @media (max-width: 575px) {
    width: calc(100% - var(--gap) / 1 * 0);
  }
`;

export const ServicesItemGrey = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(25% - var(--gap) / 4 * 3);
  padding: 30px;
  background: #f5f5f5;

  @media (max-width: 1199px) {
    width: calc(33.33333% - var(--gap) / 3 * 2);
    padding: calc(20px + 10 * ((100vw - 320px) / 1600));
  }

  @media (max-width: 767px) {
    width: calc(50% - var(--gap) / 2 * 1);
  }

  @media (max-width: 575px) {
    width: calc(100% - var(--gap) / 1 * 0);
  }
`;

export const ServicesImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 123px;
  max-height: 150px;
  -o-object-fit: contain;
  object-fit: contain;

  @media (max-width: 1199px) {
    max-width: calc(80px + 43 * ((100vw - 320px) / 1600));
    max-height: calc(100px + 50 * ((100vw - 320px) / 1600));
  }

  @media (max-width: 575px) {
    max-width: calc(75px + 10 * ((100vw - 320px) / 255));
    max-height: calc(100px + 20 * ((100vw - 320px) / 255));
  }
`;

export const PCastom = styled.p`
  max-width: 50px;
`;
