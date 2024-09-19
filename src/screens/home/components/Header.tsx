import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../../App';

const Header = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View className='flex flex-row justify-between mx-4'>
        <View>
            <View className='flex flex-row items-center gap-2'>
              <View className='w-6 h-6 bg-gray-300' />
              <Text className='text-xl italic font-bold'>Sportify</Text>
            </View>
            <View>
              <Text className='text-xs'>Shibpur, Howrah</Text>
            </View>
        </View>

        <View className='flex flex-row items-center gap-2'>
          <TouchableOpacity className='bg-primary flex justify-center items-center w-24 h-9 rounded-md' onPress={()=> navigation.navigate('Login')}>
            <Text className='italic text-white text-center text-base'>Sign in</Text>
          </TouchableOpacity>
          <View>
              <Icon name='questioncircle' size={35} color={'#041a48'}/>
          </View>
        </View>
      </View>
  )
}

export default Header