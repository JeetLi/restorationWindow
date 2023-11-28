import React from "react";
import { Row, Col, Drawer } from "antd";
import headerContent from "../../content/headerContent.json";
import { Button } from "../../common/Button";
import Container from "../../common/Container";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderSection,
  HeaderCall,
  HeaderCallNumber,
  HeaderCallBottom,
  Call,
  HeaderCallTop,
  HeaderTime,
  HeaderTimeTop,
  HeaderTimeBottom,
  BoxTime,
  LogoContainer,
  RightContent,
} from "./styles";

interface Header {
  button: string;
  onClick: () => void;
}

const Header = ({ button, onClick }: Header) => {
  return (
    <HeaderSection>
      <HeaderWrapper>
        <HeaderContainer>
          <LogoContainer>
            <img width="90" height="60" src="./img/logo.png" alt="logo" />
          </LogoContainer>
          <RightContent>
            <HeaderCall>
              <HeaderCallTop href="tel:+74997148169">
                <Call>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/117c00/phone--v1.png"
                    alt="phone--v1"
                  />
                </Call>
                <HeaderCallNumber>{headerContent.call.number}</HeaderCallNumber>
              </HeaderCallTop>
              <HeaderCallBottom>{headerContent.call.text}</HeaderCallBottom>
            </HeaderCall>
            <HeaderTime>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-rounded/24/117c00/clock.png"
                alt="clock"
              />
              <BoxTime>
                <HeaderTimeTop>{headerContent.time.title}</HeaderTimeTop>
                <HeaderTimeBottom>{headerContent.time.text}</HeaderTimeBottom>
              </BoxTime>
            </HeaderTime>
            {button && (
              <Button name="Заказать звонок" onClick={onClick}>
                {button}
              </Button>
            )}
          </RightContent>
        </HeaderContainer>
      </HeaderWrapper>
    </HeaderSection>
  );
};

export default Header;
