import { useHttpRequest } from '../shared/HttpRequest';
import { animal } from '../components/Base/EndpointsPaths';
import { simpleAnimalsConvertor } from '../convertors';

export const useGetAnimals = (onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<
    Date,
    { size: number; page: number; maintainerId: string; rentalUnitNumber?: string },
    void
  >({
    url: `/${animal}`,
    method: 'get',
    onSuccess,
    convertor: simpleAnimalsConvertor,
  });
  return response;
};
