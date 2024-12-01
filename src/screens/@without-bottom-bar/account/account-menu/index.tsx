import { View, Text } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'

const AccountMenu = () => {
  return (
    <View>
      <View className='flex flex-row w-full border-b border-gray-200 items-center justify-center' style={{ height: 20 }}>
        <EntypoIcon name='minus' size={25} />
      </View>
    </View>
  )
}

export default AccountMenu