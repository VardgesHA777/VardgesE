export type FooterProps = {
  phoneNumberValidation: (phoneNumber: string) => Promise<boolean>;
  phoneNumberLocal: string;
  resetStep: string;
  error: string | null;
};

export type TError = {
  code?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
};

export type FormContentProps = {
  resetStep: string;
  errors: TError;
  handleChange?: (event: any) => void;
  handleBlur?: (e: any) => void;
  values: {
    phoneNumber?: string;
    code?: string;
    password?: string;
    confirmPassword?: string;
  };
  touched: {
    phoneNumber?: string;
    code?: string;
    password?: string;
    confirmPassword?: string;
  };
};
