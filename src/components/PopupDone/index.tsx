import { useRef, useEffect } from "react";
import {
  PopupDoneContainer,
  PopupDoneDialog,
  PopupDoneContent,
  PopupDoneTitle,
  PopupDoneSubTitle,
  PopupDoneButton,
} from "./styles";
import DoneAnimation from "../../common/DoneAnimation";

interface PopupDone {
  Title: string;
  SubTitle: string;
  ButtonName: string;
  onClose: () => void;
  popCloseStyle: string;
}

const PopupDone = ({
  Title,
  SubTitle,
  ButtonName,
  onClose,
  popCloseStyle,
}: PopupDone) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Закрытие модального окна при нажатии на ESC
  // const handleEscPress = (event: KeyboardEvent) => {
  //   if (event.key === "Escape") {
  //     onClose();
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   document.addEventListener("keydown", handleEscPress);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("keydown", handleEscPress);
  //   };
  // }, []);

  const popDisplayStyle: React.CSSProperties = {
    display: `${popCloseStyle}`,
  };

  return (
    <PopupDoneContainer style={popDisplayStyle}>
      <PopupDoneDialog>
        <PopupDoneContent ref={modalRef}>
          <DoneAnimation />
          <PopupDoneTitle>{Title}</PopupDoneTitle>
          <PopupDoneSubTitle>{SubTitle}</PopupDoneSubTitle>
          <PopupDoneButton onClick={onClose}>{ButtonName}</PopupDoneButton>
        </PopupDoneContent>
      </PopupDoneDialog>
    </PopupDoneContainer>
  );
};

export default PopupDone;
