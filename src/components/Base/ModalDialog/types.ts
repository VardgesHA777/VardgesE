export type TModalProps = {
  open: boolean;
  title: string;
  handleClose: () => void;
  className?: string;
  children: JSX.Element | JSX.Element[];
};
