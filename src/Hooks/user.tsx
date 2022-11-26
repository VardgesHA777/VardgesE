import { useHttpRequest } from '../shared/HttpRequest';
import { signIn, signOut, user } from '../components/Base/EndpointsPaths';

export const useGetUser = (onSuccess?: (data: any) => void, onError?: () => void) => {
  return useHttpRequest<void, void, void>({ url: `/${user}/${signIn}`, method: 'get', onSuccess, onError });
};

export const useSignOut = () => {
  const response = useHttpRequest({ url: `/${user}/${signOut}`, method: 'get' });
  return response;
};

export const useSaveUserChangedPhoto = (
  id: string,
  onSuccess?: (data: any) => void,
  onError?: (error: string) => void
) => {
  const response = useHttpRequest<{ photoUrl: string }, void, void>({
    url: `/${user}/${id}`,
    method: 'patch',
    onSuccess,
    onError,
  });
  return response;
};
