import {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../App';

export const useFooterData = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [photos, getPhotos] = useCameraRoll();

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Upload'>>();

  const handlePhotoPress = (uri: string) => {
    if (selectedPhotos.includes(uri)) {
      setSelectedPhotos(selectedPhotos.filter(item => item !== uri));
    } else {
      setSelectedPhotos([...selectedPhotos, uri]);
    }
  };

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const handleGallerySelection = () => {
    setShowModal(true);
    getPhotos({first: 50, assetType: 'Photos'});
  };

  const handleSelectionDone = () => {
    setShowModal(false);
    console.log('Selected photos:', selectedPhotos);
  };

  return {
    showModal,
    setShowModal,
    selectedPhotos,
    photos,
    handlePhotoPress,
    openModal,
    handleGallerySelection,
    handleSelectionDone,
    navigation,
  };
};
