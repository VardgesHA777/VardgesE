export type TError = {
  password?: string;
  phoneNumber?: string;
  confirmPassword?: string;
};

export type TPasswordEditFieldsError = {
  currentPassword?: string;
  password?: string;
  confirmPassword?: string;
};

export type TPasswordEditValues = {
  currentPassword?: string;
  password?: string;
  confirmPassword?: string;
};

export type TPasswordEditTouched = {
  currentPassword?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
};

export type TFormContentProps = {
  authStep: string;
  errors: TError;
  handleChange?: () => void;
  handleBlur?: (e: any) => void;
  touched: {
    password?: string;
    confirmPassword?: string;
  };
  values: {
    password?: string;
    phoneNumber?: string;
    confirmPassword?: string;
  };
};

export type TPasswordError = {
  password?: string;
  confirmPassword?: string;
};

export type TPasswordChangeProps = {
  errors: TPasswordError;
  handleChange?: () => void;
  handleBlur?: (e: any) => void;
  touched: {
    password?: string;
    confirmPassword?: string;
  };
  values: {
    password?: string;
    phoneNumber?: string;
    confirmPassword?: string;
  };
};

type TLoginError = {
  password?: string;
  phoneNumber?: string;
};

export type TLoginProps = {
  errors: TLoginError;
  handleChange?: (event: any) => void;
  handleBlur?: (e: any) => void;
  touched: {
    password?: string;
    phoneNumber?: string;
  };
  values: {
    password?: string;
    phoneNumber?: string;
  };
};

type TTemporaryPasswordError = {
  password?: string;
  phoneNumber?: string;
};

export type TTemporaryPasswordProps = {
  errors: TTemporaryPasswordError;
  handleChange?: () => void;
  handleBlur?: (e: any) => void;
  values: {
    password?: string;
    phoneNumber?: string;
  };
  touched: {
    password?: string;
    phoneNumber?: string;
  };
};
