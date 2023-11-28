import { Button } from "../../common/Button";
import Container from "../../common/Container";
import React, { useState, useEffect } from "react";

import {
  SaleContainer,
  SaleSection,
  SaleLeftContent,
  SaleLeftTitle,
  SaleLeftSubTitle,
  SaleDescription,
  SaleRightContent,
  SaleRightTitle,
  SaleTimer,
  SaleTimerItem,
  SaleTimerNumber,
  SaleTimerText,
} from "./style";

interface Sale {
  LeftTitle: string;
  Subtitle: string;
  ButtonName: string;
  Description: string;
  RightTitle: string;
  Days: string;
  Hours: string;
  Minutes: string;
  Seconds: string;
  onClick: () => void;
}

const Sale = ({
  LeftTitle,
  Subtitle,
  ButtonName,
  Description,
  RightTitle,
  Days,
  Hours,
  Minutes,
  Seconds,
  onClick,
}: Sale) => {
  const [timeLeft, setTimeLeft] = useState(604800); // 1 day + 7 hours in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <SaleSection>
      <SaleContainer>
        <SaleLeftContent>
          <SaleLeftTitle>{LeftTitle}</SaleLeftTitle>
          <SaleLeftSubTitle>{Subtitle}</SaleLeftSubTitle>
          <Button onClick={onClick}>{ButtonName}</Button>
          <SaleDescription>{Description}</SaleDescription>
        </SaleLeftContent>
        <SaleRightContent>
          <SaleRightTitle>{RightTitle}</SaleRightTitle>
          <SaleTimer>
            <SaleTimerItem>
              <SaleTimerNumber>{days}</SaleTimerNumber>
              <SaleTimerText>{Days}</SaleTimerText>
            </SaleTimerItem>
            <SaleTimerItem>
              <SaleTimerNumber>{hours}</SaleTimerNumber>
              <SaleTimerText>{Hours}</SaleTimerText>
            </SaleTimerItem>
            <SaleTimerItem>
              <SaleTimerNumber>{minutes}</SaleTimerNumber>
              <SaleTimerText>{Minutes}</SaleTimerText>
            </SaleTimerItem>
            <SaleTimerItem>
              <SaleTimerNumber>{seconds}</SaleTimerNumber>
              <SaleTimerText>{Seconds}</SaleTimerText>
            </SaleTimerItem>
          </SaleTimer>
        </SaleRightContent>
      </SaleContainer>
    </SaleSection>
  );
};

export default Sale;
