import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../../common/Button/styles";

export const HeaderSection = styled("header")``;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 130px;
  padding: 0 10px;

  @media (max-width: 575px) {
    gap: 15px;
  }
  @media (max-width: 991px) {
    gap: 20px;
  }
  @media (max-width: 1199px) {
    gap: calc(20px + 110 * ((100vw - 320px) / 1600));
  }
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 93px;
  -webkit-animation: fadeInTop 0.4s ease-in-out;
  animation: fadeInTop 0.4s ease-in-out;
  background: #fff;
  h1 {
    font-size: 19px;
  }
  button {
  }

  @media (max-width: 575px) {
    padding: 5px 0;
  }

  @media (max-width: 575px) {
    min-height: 50px;
  }
  @media (max-width: 991px) {
    padding: 10px 0;
  }
  @media (max-width: 991px) {
    min-height: 60px;
  }
`;

export const LogoContainer = styled("div")`
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 0;
  color: inherit;
  list-style: none;
  box-shadow: none;
  cursor: pointer;
  background: 0 0;
`;

export const HeaderCall = styled("div")`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight:400;
  gap: 9px;

  // @media (max-width: 1130px) {
  //   margin-top: 9px;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: flex-end;
  //   gap: 3px;
  // }

  @media (max-width: 430px) {
    margin: 0 auto;
  }
`;

export const Call = styled("div")`
  font-size: 16px;
  width: 22px;
  height: 22px;
  fill: #25a94d;
  -webkit-animation: rotate 0.9s linear infinite alternate;
  animation: rotate 0.9s linear infinite alternate;
`;
export const BoxCall = styled("div")``;
export const HeaderCallTop = styled("a")`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 18px;
  color: #25a94d;
  transition: all 0.3s;
  box-sizing: border-box;
  outline: 0;

  @media (max-width: 1199px) {
    gap: calc(7px + 11 * ((100vw - 320px) / 1600));
    font-size: calc(13px + 3 * ((100vw - 320px) / 1600));
  }
`;

export const HeaderCallNumber = styled.div`
  @media (max-width: 430px) {
    display: none;
  }
`;

export const HeaderCallBottom = styled("small")`
  position: relative;
  display: block;
  width: 100%;
  text-align: right;
  font-size: 12px;

  @media (max-width: 430px) {
    display: none;
  }

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle;
    background: #fed43d;
    border-radius: 50%;
    -webkit-animation: pulse 0.8s infinite alternate;
    animation: pulse 0.8s infinite alternate;
    transition: all 0.3s;
  }
`;

export const HeaderTime = styled("div")<any>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-content: center;

  gap: 18px;
  -webkit-transform: translateX(-38px);
  transform: translateX(-38px);

  @media (max-width: 767px) {
    display: none;
  }

  @media (max-width: 991px) {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  @media (max-width: 1199px) {
    gap: calc(12px + 6 * ((100vw - 320px) / 1600));
  }
`;

export const BoxTime = styled("div")``;

export const HeaderTimeTop = styled("p")`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 1199px) {
    font-size: calc(15px + 3 * ((100vw - 320px) / 1600));
  }
`;
export const HeaderTimeBottom = styled("p")`
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 1199px) {
    font-size: calc(12px + 2 * ((100vw - 320px) / 1600));
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;
  gap: 56px;

  @media (max-width: 575px) {
    gap: 15px;
  }
`;
