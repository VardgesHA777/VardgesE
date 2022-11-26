import { useCallback, useState } from 'react';
import { Auth } from 'aws-amplify';
import { ApiHook, ApiHookReturn } from '../types/apiTypes/apiTypes';
import { useAppDispatch } from '../contexts/store';

export const useTemporaryPasswordChecking = (
  cb: () => void,
  errorCallBack: () => void
): ApiHookReturn<null, { phoneNumber?: string; password: string }> => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const reFetch = useCallback(async (dep) => {
    const { phoneNumber, password } = dep;
    try {
      const res = await Auth.signIn(phoneNumber || '', password);
      if (res.challengeName === 'NEW_PASSWORD_REQUIRED') {
        setData(res);
        cb();
        return null;
      }
      setData(res);
      return res;
    } catch (err: any) {
      errorCallBack();
      setError(err.message);
    }
  }, []);
  return { data, reFetch, error, setError };
};

export const useCompleteNewPassword = (cb: () => void): ApiHook<null, { data: object | null; password: string }> => {
  const [error, setError] = useState<string | null>(null);
  const reFetch = useCallback(async (dep) => {
    const { data, password } = dep;
    try {
      await Auth.completeNewPassword(data, password, {
        'custom:userType': 'maintainer',
      });
      cb();
    } catch (e: any) {
      setError(e.message);
    }
  }, []);
  return { data: null, reFetch, error, setError };
};

export const usePhoneNumberValidation = (
  cb: () => void
): ApiHookReturn<boolean | undefined, { phoneNumber: string }> => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const reFetch = useCallback(async ({ phoneNumber }) => {
    setLoading(true);
    try {
      await Auth.forgotPassword(phoneNumber);
      setError(null);
      cb();
      return true;
    } catch (err: any) {
      if (err.code === 'UserNotFoundException') {
        setError('User not found');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);
  return { data: null, loading, reFetch, error, setError };
};

export const useForgotPasswordValidation = (
  cb: () => void
): ApiHook<null, { phoneNumber: string; code: string; password: string }> => {
  const [error, setError] = useState<string | null>(null);
  const reFetch = useCallback(async ({ phoneNumber, code, password }) => {
    try {
      await Auth.forgotPasswordSubmit(phoneNumber, code.trim(), password);
      cb();
    } catch (err: any) {
      if (err.code === 'CodeMismatchException') {
        setError('Confirmation code is incorrect');
      } else {
        setError(err.message);
      }
    }
  }, []);
  return { data: null, reFetch, error, setError };
};

export const useAuthenticatedUser = (): ApiHookReturn<null, void> => {
  const [error, setError] = useState<string | null>(null);
  const reFetch = useCallback(async () => {
    try {
      const res = await Auth.currentAuthenticatedUser();
      return res;
    } catch (err: any) {
      setError(err.message);
    }
  }, []);
  return { data: null, reFetch, error, setError };
};

export const UseChangeUserPassword = (
  cb: () => void
): ApiHook<null, { user: object; currentPassword: string; password: string }> => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const reFetch = useCallback(async (val) => {
    const { user, currentPassword, password } = val;
    try {
      const res = await Auth.changePassword(user, currentPassword, password);
      cb();
      return res;
    } catch (err: any) {
      dispatch({
        type: 'OPEN_ALERT',
        payload: {
          severity: 'error',
          message: 'Your current password is incorrect',
        },
      });
      setError(err.message);
    }
  }, []);
  return { data: null, reFetch, error, setError };
};

export const UseAmplifySignOut = (): ApiHook<null, void> => {
  const [error, setError] = useState<string | null>(null);
  const reFetch = async () => {
    try {
      await Auth.signOut();
    } catch (err: any) {
      setError(err.message);
    }
  };
  return { data: null, reFetch, error, setError };
};
