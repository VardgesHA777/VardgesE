import { useHttpRequest } from '../shared/HttpRequest';
import { simpleIndividualComplaintConvertor } from '../convertors';
import { complaint, all } from '../components/Base/EndpointsPaths';

export const useCreateComplaint = (onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<void, void, void>({
    url: `/${complaint}`,
    method: 'post',
    onSuccess,
  });
  return response;
};

export const useGetComplaints = (onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<void, { maintainerId: string; unitId: string }, any>({
    url: `/${complaint}/${all}`,
    method: 'get',
    onSuccess,
  });
  return response;
};

export const useGetIndividualComplaint = (id: string, onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<void, { userId: string }, any>({
    url: `/${complaint}/${id}`,
    method: 'get',
    onSuccess,
    convertor: simpleIndividualComplaintConvertor,
  });
  return response;
};
