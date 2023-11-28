export interface ButtonProps {
  disabled?: boolean;
  style?: any;
  color?: string;
  fixedWidth?: boolean;
  maxWidth?: string;
  name?: string;
  type?: string;
  background?:string;
  children: React.ReactNode;
  onClick?: (() => void);
}

export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}
