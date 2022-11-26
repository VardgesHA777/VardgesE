import { useHttpRequest } from '../shared/HttpRequest';
import { maintainer, intro } from '../components/Base/EndpointsPaths';

export const useChangeIntro = (id: string, onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<{ showIntro: boolean }, void, void>({
    url: `/${maintainer}/${id}/${intro}`,
    method: 'patch',
    onSuccess,
  });
  return response;
};
