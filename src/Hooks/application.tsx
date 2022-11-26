import { useHttpRequest } from '../shared/HttpRequest';
import { application, params } from '../components/Base/EndpointsPaths';
import { IndividualAnimalData } from '../types/types';
import { simpleIndividualAnimalConvertor } from '../convertors';

export const useGetAnimalFilters = (id: string, onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<void, { maintainerId: string }, void>({
    url: `/${application}/${params}`,
    method: 'get',
    onSuccess,
  });
  return response;
};

export const useGetIndividualAnimal = (id: string, onError?: (data: any) => void) => {
  const response = useHttpRequest<null, { maintainerId: string }, IndividualAnimalData>({
    url: `/${application}/${id}`,
    method: 'get',
    onError,
    convertor: simpleIndividualAnimalConvertor,
  });
  return response;
};
