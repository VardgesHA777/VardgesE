import { useHttpRequest } from '../shared/HttpRequest';
import { units } from '../components/Base/EndpointsPaths';
import { simpleIndividualUnitConvertor } from '../convertors';

export const useGetIndividualUnit = (id: string, onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<void, { userId: string }, void>({
    url: `/${units}/${id}`,
    method: 'get',
    onSuccess,
    convertor: simpleIndividualUnitConvertor,
  });
  return response;
};
