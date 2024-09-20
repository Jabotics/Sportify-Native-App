import React from 'react'
import { Image, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { NavigationProp } from '@react-navigation/native';

const Menus = ({ iconName, menuName }: { iconName: string, menuName: string }) => (
  <View className={`border-b p-3 ${menuName == 'Bookings' && 'border-t'} border-gray-300`}>
    <TouchableOpacity className='flex flex-row items-center'>
      <AntIcon name={iconName} size={25} />
      <Text className='ml-2 text-lg font-medium'>{menuName}</Text>
    </TouchableOpacity>
  </View>
)

const menus = [
  { icon: 'calendar', menu: 'Bookings' },
  { icon: 'heart', menu: 'Wishlist' },
  { icon: 'appstore-o', menu: 'My Activity' },
  { icon: 'copy1', menu: 'Terms, Policies and Licenses' },
  { icon: 'question', menu: 'Browse FAQs' },
]


//Avatar Component
interface AvatarImageProps {
  navigation: NavigationProp<any>;
}
export const AvatarImage: React.FC<AvatarImageProps> = ({ navigation }) => (
  <View className='relative'>
    <View style={{ width: 92, height: 92, overflow: 'hidden', borderRadius: 8, position: 'relative', borderBottomEndRadius: -100 }} className='border-gray-300 border'>
      <Image source={require('@/assets/images/temp/male.jpg')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
    </View>
    <TouchableOpacity style={{
      position: 'absolute',
      bottom: '-60%',
      right: '-3%',
      transform: [{ translateY: -50 }],
      backgroundColor: 'white',
      borderRadius: 50,
      padding: 5,
      zIndex: 1, // For iOS and Android
      elevation: 5, // For Android                    
    }}
      onPress={() => navigation.navigate('EditProfile')}
    >
      <Icon name='edit' size={15} color={'black'} />
    </TouchableOpacity>
  </View>
)

const Account = ({ navigation }: { navigation: any }) => {
  return (
    <>
      <View style={{ flex: 1 }} className='bg-white'>
        {/* Top */}
        <View className='flex-1 justify-center items-center'>
          <AvatarImage navigation={navigation} />
        </View>

        {/* Middle */}
        <View className='p-5 rounded-t-2xl mt-10 border-t border-l border-r border-gray-300' style={{ flex: 2 }}>
          <View className='mt-10'>
            {
              menus.map((menu, index) => (
                <Menus iconName={menu.icon} menuName={menu.menu} key={index} />
              ))
            }
          </View>
        </View>

        {/* Bottom */}
        <View className='flex-1 flex justify-end items-center' style={{ flex: 1 }}>
          <TouchableOpacity className='mb-10 bg-primary rounded-md p-2 px-4'>
            <Text className='text-white italic text-center font-medium'>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Account