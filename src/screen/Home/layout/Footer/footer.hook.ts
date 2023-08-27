import {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../App';
import ImagePicker from 'react-native-image-crop-picker';

export const useFooterData = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Upload'>>();

  /* const handlePhotoPress = (uri: string) => {
    if (selectedPhotos.includes(uri)) {
      setSelectedPhotos(selectedPhotos.filter(item => item !== uri));
    } else {
      setSelectedPhotos([...selectedPhotos, uri]);
    }
  }; */

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const handleCameraSelection = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
    }).then(image => {
      setSelectedPhotos([image.path]);
      setShowModal(false);
      navigation.navigate('Upload', {photos: [image.path]});
    });
  };

  const handleGallerySelection = () => {
    setShowModal(true);
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    }).then(images => {
      setSelectedPhotos(images.map(image => image.path));
    });
  };

  const handleSelectionDone = () => {
    setShowModal(false);
    navigation.navigate('Upload', {photos: selectedPhotos});
  };

  return {
    showModal,
    setShowModal,
    selectedPhotos,
    // handlePhotoPress,
    openModal,
    handleGallerySelection,
    handleSelectionDone,
    handleCameraSelection,
    navigation,
  };
};
