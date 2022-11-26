export type TIconButtonProps = {
  variant?: 'outlined' | 'contained' | 'text';
  textColor?: string;
  bgColor?: string;
  reverse?: boolean;
  text?: string;
  margin?: string;
  handleClick: () => void;
  Icon?: JSX.Element;
  children: string | JSX.Element | JSX.Element[];
};
