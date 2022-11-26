import { useHttpRequest } from '../shared/HttpRequest';
import { uploadFile } from '../components/Base/EndpointsPaths';

export const usePhotoUpload = (onSuccess?: (data: any) => void) => {
  const response = useHttpRequest<any, void, void>({
    url: `/${uploadFile}`,
    method: 'post',
    onSuccess,
  });
  return response;
};
