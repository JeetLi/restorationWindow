import styled from "styled-components";

export const PopupConatainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  display: none;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
`;
export const PopupDialog = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 70%;
  width: 730px;
  max-width: 90%;
  padding: 70px;
  background: #fff;
  border-radius: 10px;
  transition: all 0.3s;
  text-align: center;

  @media (max-width: 1199px) {
    padding: calc(25px + 45 * ((100vw - 320px) / 1600))
      calc(7px + 63 * ((100vw - 320px) / 1600));
  }
`;
export const PopupClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 1199px) {
    width: calc(27px + 7 * ((100vw - 320px) / 1600));
    height: calc(27px + 7 * ((100vw - 320px) / 1600));
  }
`;

export const PopCloseImg = styled.img``;
export const PopupTitle = styled.h1`
 font-weight:700;
  margin-top:0;
  margin-bottom: 22px;
  font-size: 36px;
  color: #383838;
  text-align: center;

  @media (max-width: 1199px) {
    margin-bottom: calc(15px + 7 * ((100vw - 320px) / 1600));
    font-size: calc(28px + 8 * ((100vw - 320px) / 1600));
  }
`;
export const PopupSubTitle = styled.p`
font-weight:500;
  margin-top:0;
  margin-bottom: 30px;
  font-size: 24px;
  color: rgba(56, 56, 56, 0.8);
  line-height: calc(29 / 24);
`;
export const PopupForm = styled.div``;
