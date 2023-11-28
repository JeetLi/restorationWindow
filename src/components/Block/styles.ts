import styled from "styled-components";

export const BlockSection = styled("Block")`
  padding-bottom: 80px;
  max-width: 1920px;
  margin: 0 auto;
  min-height: 850px;
`;

export const BlockContainer = styled("div")`
  background-image: url(./img/headerBg.webp);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  max-width: 100%;
  max-height: 100%;
  @media (min-width: 1200px) .container {
    width: 1110px;
  }
  @media (min-width: 992px) .container {
    width: 960px;
  }
  @media (min-width: 768px) .container {
    width: 720px;
  }
  @media (min-width: 576px) .container {
    width: 520px;
    padding: 0;
  }
  .container {
    margin: 0 auto;
    max-width: 100%;
    width: 430px;
    padding: 0 10px;
  }

  @media (max-width: 991px) {
    min-height: auto;
    background: 0 0 !important;
  }

  @media (max-width: 1199px) {
    // padding-top: calc(30px + 35 * ((100vw - 320px) / 1600));
    min-height: calc(300px + 550 * ((100vw - 320px) / 1600));
  }
`;

export const BlockContainerLeft = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 63px;
  max-width: 780px;

  @media (max-width: 1199px) {
    gap: calc(15px + 43 * ((100vw - 320px) / 1600));
    max-width: calc(400px + 480 * ((100vw - 320px) / 1600));
  }

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const BlockTitle = styled("h1")`
  font-weight: 767;
  font-size: 54px;

  @media (max-width: 991px) {
    max-width: 580px;
    font-size: calc(25px + 9 * ((100vw - 320px) / 671));
  }

  @media (max-width: 1199px) {
    font-size: calc(20px + 34 * ((100vw - 320px) / 1600));
  }
`;
export const BlockList = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 63px;
  max-width: 780px;
  gap: 28px;
  max-width: 510px;
  font-size: 18px;
  line-height: calc(22 / 18);

  @media (max-width: 991px) {
    max-width: 100%;
  }

  @media (max-width: 1199px) {
    gap: calc(20px + 13 * ((100vw - 320px) / 1600));
    font-size: calc(15px + 3 * ((100vw - 320px) / 1600));
  }
`;
export const BlockListItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 35px;
`;
export const BlockListItemText = styled("div")``;
export const GreenSpan = styled("span")`
  color: #25a94d;
`;
export const BlockListTruck = styled("div")`
  max-width: 30px;
  max-height: 30px;
  flex-basis: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  fill: #25a94d;

  @media (max-width: 1199px) {
    max-width: calc(24px + 6 * ((100vw - 320px) / 1600));
    max-height: calc(24px + 6 * ((100vw - 320px) / 1600));
    flex-basis: calc(24px + 6 * ((100vw - 320px) / 1600));
  }
`;
export const BlockListSecurity = styled("div")`
  max-width: 30px;
  max-height: 30px;
  flex-basis: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  fill: #25a94d;

  @media (max-width: 1199px) {
    max-width: calc(24px + 6 * ((100vw - 320px) / 1600));
    max-height: calc(24px + 6 * ((100vw - 320px) / 1600));
    flex-basis: calc(24px + 6 * ((100vw - 320px) / 1600));
  }
`;
export const BlockListlike = styled("div")`
  max-width: 30px;
  max-height: 30px;
  flex-basis: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  fill: #25a94d;

  @media (max-width: 1199px) {
    max-width: calc(24px + 6 * ((100vw - 320px) / 1600));
    max-height: calc(24px + 6 * ((100vw - 320px) / 1600));
    flex-basis: calc(24px + 6 * ((100vw - 320px) / 1600));
  }
`;

export const BlockForm = styled("div")`
  max-width: 600px;

  @media (max-width: 575px) {
    text-align: center;
  }

  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 1199px) {
    max-width: calc(400px + 200 * ((100vw - 320px) / 1600));
  }
`;
export const BlockFormTitle = styled("h2")`
  font-size: 24px;
  padding-bottom: 35px;
  margin: 0;
  overflow-x: hidden;
  color: #383838;

  @media (max-width: 575px) {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1199px) {
    margin-bottom: calc(15px + 20 * ((100vw - 320px) / 1600));
    font-size: calc(17px + 7 * ((100vw - 320px) / 1600));
  }
`;

export const DescriptionForm = styled.p`
  padding-top: 20px;
  font-size: 12px;
  line-height: calc(15 / 12);
  letter-spacing: 0.02em;
  color: #939393;

  @media (max-width: 575px) {
    text-align: center;
  }
  @media (max-width: 1199px) {
    margin-top: calc(10px + 10 * ((100vw - 320px) / 1600));
    font-size: calc(10px + 2 * ((100vw - 320px) / 1600));
  }
`;
