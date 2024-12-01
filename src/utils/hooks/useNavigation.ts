import { NavigationProp } from '@/types';
import { useNavigation } from '@react-navigation/native';

export const useTypedNavigation = () => {
  return useNavigation<NavigationProp>();
};