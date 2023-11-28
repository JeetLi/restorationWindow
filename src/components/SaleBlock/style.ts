import styled from "styled-components";

export const SaleSection = styled.section`
  position: relative;
  margin-top: 90px;
  min-height: 511px;
  color: #fff;

  &::before {
    position: absolute;
    left: 0;
    content: "";
    top: 0;
    width: 59%;
    height: 100%;
    background-image: url(./img/discountBg.webp);
    background-repeat: no-repeat;
    // background-size: contain;
    background-position: right center;

    & container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media (max-width: 991px) {
      top:-50px;
      width: 100%;
      background-position: left center;
    }

    @media (max-width: 575px) {
      top:0px;
      width: 100%;
      background-position: left center;
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
    width: 100%;
    height: calc(100% - 47px * 2);
    -webkit-transform: translatey(-50%);
    transform: translatey(-50%);
    background: #25a94d;

    @media (max-width: 991px) {
      display: none;
    }
  }

  @media (max-width: 1199px) {
    margin-top: calc(30px + 60 * ((100vw - 320px) / 1600));
    min-height: calc(300px + 211 * ((100vw - 320px) / 1600));
  }
  @media (max-width: 991px) {
    margin-top: 0;
  }
`;
export const SaleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  width: 430px;
  padding: 0 10px;
  position: relative;

  @media (min-width: 320px) {
    flex-direction: column;
    text-align: center;
    width: 520px;
    padding: 0;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    text-align: center;
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1110px;
  }
`;
export const SaleLeftContent = styled.div`
  max-width: 475px;
  padding-bottom: 90px;
  padding-top: 90px;

  @media (max-width: 991px) {
    padding-top: calc(80px + 60 * ((100vw - 320px) / 1600));
  }
  @media (max-width: 1199px) {
    padding-bottom: calc(30px + 60 * ((100vw - 320px) / 1600));
    max-width: calc(350px + 125 * ((100vw - 320px) / 1600));
  }
`;
export const SaleLeftTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 42px;
  line-height: calc(50 / 42);
  font-weight: 600;

  @media (max-width: 1199px) {
    margin-bottom: calc(10px + 5 * ((100vw - 320px) / 1600));
    font-size: calc(25px + 17 * ((100vw - 320px) / 1600));
  }
`;
export const SaleLeftSubTitle = styled.h2`
  margin-bottom: 44px;
  font-size: 24px;
  line-height: calc(29 / 24);
  color: #e5e5e5;

  @media (max-width: 1199px) {
    margin-bottom: calc(20px + 24 * ((100vw - 320px) / 1600));
    font-size: calc(18px + 6 * ((100vw - 320px) / 1600));
  }
`;
export const SaleDescription = styled.p`
  margin-top: 24px;
  letter-spacing: 0.02em;
  color: #fafafa;
  font-size: 12px;
  line-height: calc(15 / 12);

  @media (max-width: 1199px) {
    margin-top: calc(15px + 9 * ((100vw - 320px) / 1600));
    font-size: calc(10px + 2 * ((100vw - 320px) / 1600));
  }
`;
export const SaleRightContent = styled.div`
  padding-bottom: 47px;
  padding-top: 47px;

  @media (max-width: 1199px) {
    padding-bottom: calc(25px + 22 * ((100vw - 320px) / 1600));
    padding-top: calc(25px + 22 * ((100vw - 320px) / 1600));
  }

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 30px 0;
    background: #25a94d;
  }
`;
export const SaleRightTitle = styled.h1`
  font-weight: 700;
  margin: 0 auto;
  max-width: 415px;
  text-align: center;
  font-size: 42px;
  line-height: calc(51 / 42);

  @media (max-width: 1199px) {
    max-width: calc(300px + 115 * ((100vw - 320px) / 1600));
    font-size: calc(24px + 18 * ((100vw - 320px) / 1600));
  }
`;
export const SaleTimer = styled.div`
  display: flex;
  gap: 45px;
  margin-top: 40px;

  @media (max-width: 1199px) {
    gap: calc(20px + 25 * ((100vw - 320px) / 1600));
    margin-top: calc(20px + 20 * ((100vw - 320px) / 1600));
  }
`;
export const SaleTimerItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const SaleTimerNumber = styled.p`
  font-weight:700;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fed43d;
  border-radius: 50%;
  background: #fff;
  font-size: 36px;
  color: #25a94d;

  @media (max-width: 1199px) {
    width: calc(45px + 20 * ((100vw - 320px) / 1600));
    height: calc(45px + 20 * ((100vw - 320px) / 1600));
    font-size: calc(23px + 13 * ((100vw - 320px) / 1600));
  }
`;
export const SaleTimerText = styled.p`
  font-weight: 600;
  color: #fff;
  text-transform: lowercase;
  font-size: 18px;
  letter-spacing: 0.145em;

  @media (max-width: 1199px) {
    font-size: calc(15px + 3 * ((100vw - 320px) / 1600));
  }
`;
