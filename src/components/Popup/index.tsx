import React, { useEffect, useRef } from "react";
import {
  PopupConatainer,
  PopupDialog,
  PopCloseImg,
  PopupContent,
  PopupClose,
  PopupTitle,
  PopupSubTitle,
  PopupForm,
} from "./styles";
import { Button } from "../../common/Button";
import { BlockFormTitle, DescriptionForm } from "../Block/styles";
import InputNumber from "../../common/InputNumber";
import Form from "../../common/Form";

interface Popup {
  PopTitle: string;
  PopSub: string;
  DescForm: string;
  popStyle: string;
  ButtonName: string;
  onClose: () => void;
  onClick: () => void;
}

const Popup = ({
  PopTitle,
  PopSub,
  ButtonName,
  DescForm,
  popStyle,
  onClose,
  onClick,
}: Popup) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Закрытие модального окна при нажатии на ESC
  const handleEscPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscPress);
    };
  }, []);

  const popDisplayStyle: React.CSSProperties = {
    display: `${popStyle}`,
  };
  return (
    <PopupConatainer style={popDisplayStyle}>
      <PopupDialog>
        <PopupContent ref={modalRef}>
          <PopupClose onClick={onClose}>
            <PopCloseImg src="./img/icons/close.png" />
          </PopupClose>
          <PopupTitle>{PopTitle}</PopupTitle>
          <PopupSubTitle>{PopSub}</PopupSubTitle>
          <PopupForm>
            <Form onClick={onClick} ButtonName={ButtonName} />
            <DescriptionForm>{DescForm}</DescriptionForm>
          </PopupForm>
        </PopupContent>
      </PopupDialog>
    </PopupConatainer>
  );
};
export default Popup;
