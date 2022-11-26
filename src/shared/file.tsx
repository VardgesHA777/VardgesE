type UploadProps = {
  file: string | Blob;
  category?: string;
};

export const Upload = ({ file, category }: UploadProps) => {
  const formData = new FormData();
  formData.append('file', file);
  if (category) {
    formData.append('category', category);
  }
  return formData;
};
