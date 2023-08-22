import {useState} from 'react';

export const useUploadScreenData = () => {
  const [content, setContent] = useState('');

  const handleUploadInput = (newUpload: string) => {
    setContent(newUpload);
  };

  // Return all necessary data and functions
  return {
    content,
    handleUploadInput,
  };
};
