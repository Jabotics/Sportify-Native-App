export type { AppSettingsInitialState } from './app-settings'
export type { IconName } from './bottom-bar'


import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;