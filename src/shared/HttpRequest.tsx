import { useState, useRef } from 'react';
import axios, { Method } from '../axios';
import { useAppDispatch } from '../contexts/store';

const timeout = 40000;

type HttpProps<TData> = {
  url: string;
  method: Method;
  body?: object;
  params?: object;
  customError?: string;
  contentType?: string;
  convertor?: (data: any) => TData;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  dep?: {
    body?: any;
  };
};

export const useHttpRequest = <T, D, TData>({
  url,
  method = 'get',
  convertor = (data) => data,
  onSuccess = () => {},
  onError = () => {},
}: HttpProps<TData>) => {
  const [data, setData] = useState<TData | null>(null);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>();
  const mountedRef = useRef(true);
  const reFetch = async (dep?: { body?: T | null; params?: D | null }) => {
    if (!mountedRef.current) return null;
    setLoading(true);
    dispatch({
      type: 'HANDLE_LOADING',
    });
    try {
      const response = await axios(url, {
        url,
        timeout,
        method,
        data: dep?.body,
        params: dep?.params,
      });
      const convertedData = convertor(response.data);
      onSuccess(convertedData);
      setData(convertedData);
      return convertedData;
    } catch (e: any) {
      onError(e.response);
      dispatch({
        type: 'SET_ERROR',
        payload: {
          status: window.navigator.onLine ? e.response.status : 499,
          message: e.response.data.message,
        },
      });
    } finally {
      dispatch({
        type: 'HANDLE_LOADING',
      });
      setLoading(false);
    }
  };

  return { data, loading, reFetch };
};
