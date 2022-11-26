import { Dispatch, SetStateAction } from 'react';

export type ApiHookReturn<T, D> = {
  data: T | null;
  error: string | null;
  loading?: boolean;
  reFetch: (value: D) => Promise<T | null>;
  setError: (value: string | null) => void;
};

export type ApiHook<T, D> = {
  data: T | null;
  error: string | null;
  reFetch: Dispatch<SetStateAction<D>>;
  setError: (value: string | null) => void;
};
