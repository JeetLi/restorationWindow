import React, { useState, useEffect, useRef } from "react";

import headerContent from "../../content/headerContent.json";
import usSocial from "../../content/usSocial.json";
import blockContent from "../../content/blockContent.json";
import servicesContent from "../../content/servicesContent.json";
import consultationContent from "../../content/consultationContent.json";
import priceContent from "../../content/priceContent.json";
import benefitsContent from "../../content/benefitsContent.json";
import saleContent from "../../content/saleContent.json";
import footerContent from "../../content/footerContent.json";
import popupContent from "../../content/popupContent.json";
import popupdoneContect from "../../content/popupdoneContent.json";
import usworkContent from "../../content/usworkContent.json";
import directionContent from "../../content/directionContent.json";

import { Styles } from "../../styles/styles";
import Header from "../../components/Header";
import UsSocial from "../../components/usSocial";
import Block from "../../components/Block";
import Services from "../../components/ServicesBlock";
import Consultation from "../../components/СonsultationBlock";
import Price from "../../components/PriceBlock";
import Benefits from "../../components/BenefitsBlock";
import Sale from "../../components/SaleBlock";
import Footer from "../../components/Footer";
import Popup from "../../components/Popup";
import PopupDone from "../../components/PopupDone";
import UsWorks from "../../components/UsWorks";
import Reviews from "../../components/Reviews";
import DirectionBlock from "../../components/DirectionBlock";

const Home = () => {
  const [displayPopStyle, setDisplayPopStyle] = useState("none");
  const [displayPopDoneStyle, setDisplayPopDoneStyle] = useState("none");

  const onOpen = () => {
    setDisplayPopStyle("block");
  };
  const onPupDone = () => {
    setDisplayPopStyle("none");
    setDisplayPopDoneStyle("block");
  };
  const onClose = () => {
    setDisplayPopStyle("none");
    setDisplayPopDoneStyle("none");
  };

  return (
    <>
      <Styles />
      <Header onClick={onOpen} button={headerContent.button} />
      <UsSocial
        whatsAppNumber={usSocial.whatsAppNumber}
        telegramID={usSocial.telegramID}
        viberNumber={usSocial.viberNumber}
      />
      <Block
        onClick={onPupDone}
        ButtonName={blockContent.ButtonName}
        TitleStepOne={blockContent.title.firstStepTitle}
        SpanStep={blockContent.title.SpanStepTitle}
        TitleStepTwo={blockContent.title.SecondStepTitle}
        TruckTextOne={blockContent.truck.firstStepText}
        TruckTextTwo={blockContent.truck.spanStepText}
        TruckTextFree={blockContent.truck.secondStepTitle}
        SecurityTextOne={blockContent.security.firstStepText}
        SecurityTextTwo={blockContent.security.spanStepText}
        SecurityTextThree={blockContent.security.secondStepTitle}
        LikeTextOne={blockContent.like.firstStepText}
        LikeTextTwo={blockContent.like.spanStepText}
        LikeTextThree={blockContent.like.secondStepText}
        LikeTextFour={blockContent.like.secondSpanText}
        LikeTextFive={blockContent.like.ThrirdStepText}
        BlockFormTitl={blockContent.application.title}
        DescForm={blockContent.application.description}
      />

      <DirectionBlock
        MainTitle={directionContent.MainTitle}
        WoodDirectionOne={directionContent.WoodDirectionOne}
        WoodDirectionTwo={directionContent.WoodDirectionTwo}
        WoodDirectionThree={directionContent.WoodDirectionThree}
        WoodDirectionFour={directionContent.WoodDirectionFour}
        PlasticDirectionOne={directionContent.PlasticDirectionOne}
        PlasticDirectionTwo={directionContent.PlasticDirectionTwo}
        PlasticDirectionThree={directionContent.PlasticDirectionThree}
        PlasticDirectionFour={directionContent.WoodDirectionFour}
        SecondTitle={directionContent.SecondTitle}
        SubTitle={directionContent.SubTitle}
        WoodButtonOne={directionContent.WoodButtonOne}
        WoodButtonTwo={directionContent.WoodButtonTwo}
        WoodButtonThree={directionContent.WoodButtonThree}
        PlasticButtonOne={directionContent.PlasticButtonOne}
        PlasticButtonTwo={directionContent.PlasticButtonTwo}
        PlasticButtonThree={directionContent.PlasticButtonThree}
        DescGreen={directionContent.DescGreen}
        PriceStepOne={directionContent.Price}
        Desc={directionContent.Desc}
      />
      <Services
        Title={servicesContent.mainTitle}
        GreenTitle={servicesContent.price.expirienceTitle}
        GreenDesc={servicesContent.price.expirienceDesc}
        repairWindowTitle={servicesContent.price.repairWindowTitle}
        repairWindowtDesc={servicesContent.price.repairWindowtDesc}
        adjustmentTitle={servicesContent.price.adjustmentTitle}
        adjustmentDesc={servicesContent.price.adjustmentDesc}
        changeAccessoriesTitle={servicesContent.price.changeAccessoriesTitle}
        changeAccessoriesDesc={servicesContent.price.changeAccessoriesDesc}
        sealingTitle={servicesContent.price.sealingTitle}
        sealingDesc={servicesContent.price.sealingDesc}
        glassUnitTitle={servicesContent.price.glassUnitTitle}
        glassUnitDesc={servicesContent.price.glassUnitDesc}
        TamperProofTitle={servicesContent.price.TamperProofTitle}
        TamperProofDesc={servicesContent.price.TamperProofDesc}
        doorknobTitle={servicesContent.price.doorknobTitle}
        doorknobDesc={servicesContent.price.doorknobDesc}
        changeSealTitle={servicesContent.price.changeSealTitle}
        changeSealTitle2={servicesContent.price.changeSealTitle2}
        changeSealDesc={servicesContent.price.changeAccessoriesDesc}
        mosquitoNetsTitle={servicesContent.price.mosquitoNetsTitle}
        mosquitoNetsDesc={servicesContent.price.mosquitoNetsDesc}
        blindTitle={servicesContent.price.blindTitle}
        blindDesc={servicesContent.price.blindDesc}
        saleTitle={servicesContent.price.saleTitle}
      />
      <UsWorks
        Title={usworkContent.Title}
        GreenTitle={usworkContent.GreenTitle}
        UsWorkTextOne={usworkContent.UsWorkTextOne}
        UsWorkTextTwoPartOne={usworkContent.UsWorkTextTwoPartOne}
        UsWorkTextTwoPartTwo={usworkContent.UsWorkTextTwoPartTwo}
        UsWorkTextTwoPartThree={usworkContent.UsWorkTextTwoPartThree}
        UsWorkTextThree={usworkContent.UsWorkTextThree}
        UsWorkTextFour={usworkContent.UsWorkTextFour}
        UsWorkTextFive={usworkContent.UsWorkTextFive}
        UsWorkTextSix={usworkContent.UsWorkTextSix}
        UsWorkTextSeven={usworkContent.UsWorkTextSeven}
        UsWorkTextSevenPartTwo={usworkContent.UsWorkTextSevenPartTwo}
        UsWorkTextEight={usworkContent.UsWorkTextEight}
        UsWorkTextNine={usworkContent.UsWorkTextNine}
        UsWorkTextTen={usworkContent.UsWorkTextTen}
        UsWorkTextTenPartTwo={usworkContent.UsWorkTextTenPartTwo}
        UsWorkTextTenPartThree={usworkContent.UsWorkTextTenPartThree}
        UsWorkTextEleven={usworkContent.UsWorkTextEleven}
        UsWorkTextElevenPartTwo={usworkContent.UsWorkTextElevenPartTwo}
        UsWorkTextTwelve={usworkContent.UsWorkTextTwelve}
        UsWorkTextThirteen={usworkContent.UsWorkTextThirteen}
        SecondGreenTitle={usworkContent.SecondGreenTitle}
        MaterialItemOne={usworkContent.MaterialItemOne}
        MaterialItemTwo={usworkContent.MaterialItemTwo}
        MaterialItemThree={usworkContent.MaterialItemThree}
      />
      <Consultation
        Title={consultationContent.title}
        Text={consultationContent.text}
        ButtonText={consultationContent.buttonText}
        DescForm={consultationContent.description}
        onClick={onPupDone}
      />
      <Price
        Title={priceContent.Title}
        itemOne={priceContent.Price.i1}
        priceOne={priceContent.Price.p1}
        itemTwo={priceContent.Price.i2}
        priceTwo={priceContent.Price.p2}
        itemThree={priceContent.Price.i3}
        priceThree={priceContent.Price.p3}
        itemFour={priceContent.Price.i4}
        priceFour={priceContent.Price.p4}
        itemFive={priceContent.Price.i5}
        priceFive={priceContent.Price.p5}
        itemSix={priceContent.Price.i6}
        priceSix={priceContent.Price.p6}
        itemSeven={priceContent.Price.i7}
        priceSeven={priceContent.Price.p7}
        itemEight={priceContent.Price.i8}
        priceEight={priceContent.Price.p8}
        itemNine={priceContent.Price.i9}
        priceNine={priceContent.Price.p9}
        itemTen={priceContent.Price.i10}
        priceTen={priceContent.Price.p10}
        itemEleven={priceContent.Price.i11}
        priceEleven={priceContent.Price.p11}
        itemTwelve={priceContent.Price.i12}
        priceTwelve={priceContent.Price.p12}
        ButtonText={priceContent.ButtonText}
        onClick={onOpen}
      />
      <Benefits
        Title={benefitsContent.Title}
        BenefitsTitleOne={benefitsContent.itemOne.TitleItem}
        BenefitsItemNumberOne={benefitsContent.itemOne.NumberItem}
        BenefitsTextOne={benefitsContent.itemOne.TextItem}
        BenefitsTitleTwo={benefitsContent.itemTwo.TitleItem}
        BenefitsItemNumberTwo={benefitsContent.itemTwo.NumberItem}
        BenefitsTextTwo={benefitsContent.itemTwo.TextItem}
        BenefitsTitleThree={benefitsContent.itemThree.TitleItem}
        BenefitsItemNumberThree={benefitsContent.itemThree.NumberItem}
        BenefitsTextThree={benefitsContent.itemThree.TextItem}
        BenefitsTitleFour={benefitsContent.itemFour.TitleItem}
        BenefitsItemNumberFour={benefitsContent.itemFour.NumberItem}
        BenefitsTextFour={benefitsContent.itemFour.TextItem}
        BenefitsTitleFive={benefitsContent.itemFive.TitleItem}
        BenefitsItemNumberFive={benefitsContent.itemFive.NumberItem}
        BenefitsTextFive={benefitsContent.itemFive.TextItem}
        BenefitsTitleSix={benefitsContent.itemSix.TitleItem}
        BenefitsItemNumberSix={benefitsContent.itemSix.NumberItem}
        BenefitsTextSix={benefitsContent.itemSix.TextItem}
      />
      <Sale
        LeftTitle={saleContent.LeftTitle}
        Subtitle={saleContent.Subtitle}
        ButtonName={saleContent.ButtonName}
        Description={saleContent.Description}
        RightTitle={saleContent.RightTitle}
        Days={saleContent.Days}
        Hours={saleContent.Hours}
        Minutes={saleContent.Minutes}
        Seconds={saleContent.Seconds}
        onClick={onOpen}
      />
      <Reviews />
      <Footer
        Year={footerContent.Copyright}
        Email={footerContent.Email}
        FooterNumber={footerContent.Tel}
        Subtitle={footerContent.SubTitle}
        LowerTitl={footerContent.LowerTitl}
        LowerSub={footerContent.LowerSub}
      />

      <Popup
        ButtonName={popupContent.ButtonName}
        onClose={onClose}
        popStyle={displayPopStyle}
        PopTitle={popupContent.PopTitle}
        PopSub={popupContent.PopSub}
        DescForm={blockContent.application.description}
        onClick={onPupDone}
      />

      <PopupDone
        popCloseStyle={displayPopDoneStyle}
        Title={popupdoneContect.Title}
        SubTitle={popupdoneContect.SubTitle}
        ButtonName={popupdoneContect.ButtonName}
        onClose={onClose}
      />
    </>
  );
};

export default Home;
// Тут берутся контейнеры,и совмещаются вместе с локолизацией
