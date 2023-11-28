import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const DirectionButton = ({
  color,
  fixedWidth,
  children,
  onClick,
  type,
  background,
}: ButtonProps) => (
  <StyledButton
    type={type}
    color={color}
    background={background}
    fixedWidth={fixedWidth}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);
