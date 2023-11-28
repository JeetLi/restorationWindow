import {
  PriceSection,
  PriceMainTitle,
  GreenSpan,
  PriceTitle,
  PriceItemWrapper,
  PriceItem,
  PriceButtonWrapepr,
} from "./styles";
import { Button } from "../../common/Button";
import Container from "../../common/Container";

interface Price {
  Title: string;
  itemOne: string;
  priceOne: string;
  itemTwo: string;
  priceTwo: string;
  itemThree: string;
  priceThree: string;
  itemFour: string;
  priceFour: string;
  itemFive: string;
  priceFive: string;
  itemSix: string;
  priceSix: string;
  itemSeven: string;
  priceSeven: string;
  itemEight: string;
  priceEight: string;
  itemNine: string;
  priceNine: string;
  itemTen: string;
  priceTen: string;
  itemEleven: string;
  priceEleven: string;
  itemTwelve: string;
  priceTwelve: string;
  ButtonText: string;
  onClick: () => void;
}

const Price = ({
  Title,
  itemOne,
  priceOne,
  itemTwo,
  priceTwo,
  itemThree,
  priceThree,
  itemFour,
  priceFour,
  itemFive,
  priceFive,
  itemSix,
  priceSix,
  itemSeven,
  priceSeven,
  itemEight,
  priceEight,
  itemNine,
  priceNine,
  itemTen,
  priceTen,
  itemEleven,
  priceEleven,
  itemTwelve,
  priceTwelve,
  ButtonText,
  onClick,
}: Price) => {
  return (
    <PriceSection>
      <Container>
        <PriceMainTitle>{Title}</PriceMainTitle>
        <PriceItemWrapper>
          <PriceItem>
            <PriceTitle>{itemOne}</PriceTitle>
            <GreenSpan>{priceOne}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemTwo}</PriceTitle>
            <GreenSpan>{priceTwo}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemThree}</PriceTitle>
            <GreenSpan>{priceThree}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemFour}</PriceTitle>
            <GreenSpan>{priceFour}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemFive}</PriceTitle>
            <GreenSpan>{priceFive}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemSix}</PriceTitle>
            <GreenSpan>{priceSix}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemSeven}</PriceTitle>
            <GreenSpan>{priceSeven}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemEight}</PriceTitle>
            <GreenSpan> {priceEight}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemNine}</PriceTitle>
            <GreenSpan>{priceNine}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemTen}</PriceTitle>
            <GreenSpan>{priceTen}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemEleven}</PriceTitle>
            <GreenSpan>{priceEleven}</GreenSpan>
          </PriceItem>
          <PriceItem>
            <PriceTitle>{itemTwelve}</PriceTitle>
            <GreenSpan>{priceTwelve}</GreenSpan>
          </PriceItem>
        </PriceItemWrapper>
        <PriceButtonWrapepr>
          <Button onClick={onClick}>{ButtonText}</Button>
        </PriceButtonWrapepr>
      </Container>
    </PriceSection>
  );
};

export default Price;
