import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@landlord-tech/opp-ui-kit';
import { AddCircleRounded } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Upload } from '../../../shared/file';
import { useAppDispatch } from '../../../contexts/store';
import { usePhotoUpload } from '../../../Hooks/uploadFile';
import {
  Thumb,
  DropImg,
  ThumbContainer,
  DropInputWrapperEmpty,
  StyledErrorMessage,
  Label,
  DragText,
  OrText,
  Close,
} from './styles';

type PhotoDropZoneProps = {
  imageUrls?: string[];
  setImageUrls?: any;
  error?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
};

const PhotoDropzone = ({
  imageUrls = [],
  className,
  setImageUrls,
  label,
  error = '',
  disabled,
}: PhotoDropZoneProps) => {
  const dispatch = useAppDispatch();

  const { reFetch, data } = usePhotoUpload();

  useEffect(() => {
    if (data) {
      setImageUrls([...imageUrls, data]);
    }
  }, [data]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.jpg, .jpeg, .png, .webp, .jfif',
    multiple: true,
    onDropRejected: () => {
      dispatch({
        type: 'OPEN_ALERT',
        payload: {
          message: 'Unsupported image format',
          severity: 'error',
        },
      });
    },
    onDropAccepted: async (acceptedPhotos) => {
      const uploadImagesPromises = acceptedPhotos.map((item) => {
        const formData = Upload({ file: item, category: 'APPLICATION_IMAGE' });
        return reFetch({
          body: formData,
        });
      });
      await Promise.all(uploadImagesPromises);
    },
  });

  function removeImage(image: string) {
    const newImageUrls = imageUrls.filter((item) => item !== image);
    setImageUrls(newImageUrls);
  }

  return (
    <div style={{ position: 'relative' }}>
      <Label>{label}</Label>
      <ThumbContainer>
        {imageUrls.map((photo: string) => (
          <Thumb className={className} key={photo}>
            <DropImg src={photo} alt={photo} />
            {!disabled && (
              <Close onClick={() => removeImage(photo)}>
                <CloseIcon />
              </Close>
            )}
          </Thumb>
        ))}
      </ThumbContainer>
      <DropInputWrapperEmpty {...getRootProps()}>
        <input {...getInputProps()} disabled={disabled} />
        <div>
          <DragText>Drag and drop files here</DragText>
          <OrText>or</OrText>
          <Button startIcon={<AddCircleRounded />} text='Add files' square />
        </div>
      </DropInputWrapperEmpty>
      {error ? <StyledErrorMessage>{error}</StyledErrorMessage> : null}
    </div>
  );
};

export default PhotoDropzone;
