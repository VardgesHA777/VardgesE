import { useHttpRequest } from '../shared/HttpRequest';
import { IndividualPropertyData, PropertiesData } from '../types/types';
import { params, rental, name } from '../components/Base/EndpointsPaths';
import { simplePropertiesConverter, simpleRentalNamesConverter } from '../convertors';

export const useGetIndividualProperty = (id: string, onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<void, { maintainerId: string }, IndividualPropertyData>({
    url: `/${rental}/${id}`,
    method: 'get',
    onSuccess,
  });
  return response;
};

export const useGetPropertyFilters = (id: string, onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<void, { maintainerId: string }, void>({
    url: `/${rental}/${params}`,
    method: 'get',
    onSuccess,
  });
  return response;
};

export const useGetPropertyUnits = (rentalId: string, onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<void, { userId: string; rentalId: string; unitNumber?: string }, void>({
    url: `/units`,
    method: 'get',
    onSuccess,
  });
  return response;
};

export const useGetProperties = (onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<Date, { size: number; page: number; maintainerId: string }, PropertiesData>({
    url: `/${rental}`,
    method: 'get',
    onSuccess,
    convertor: simplePropertiesConverter,
  });
  return response;
};

export const useGetRentalNames = (onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<void, { maintainerId: string }, void>({
    url: `/${rental}/${name}`,
    method: 'get',
    onSuccess,
    convertor: simpleRentalNamesConverter,
  });
  return response;
};
