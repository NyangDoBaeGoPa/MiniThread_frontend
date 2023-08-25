import {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../App';
import {launchImageLibrary} from 'react-native-image-picker';

export const useFooterData = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);

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
    launchImageLibrary({mediaType: 'photo'});
  };

  const handleSelectionDone = () => {
    setShowModal(false);
    console.log('Selected photos:', selectedPhotos);
  };

  return {
    showModal,
    setShowModal,
    selectedPhotos,
    handlePhotoPress,
    openModal,
    handleGallerySelection,
    handleSelectionDone,
    navigation,
  };
};
