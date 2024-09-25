import { View, Text, ScrollView } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'

const EditAccount = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      
      <View className='flex flex-row w-full border-b border-gray-200 items-center justify-center' style={{ height: 20 }}>
        <EntypoIcon name='minus' size={25} />
      </View>
    </ScrollView>
  )
}

export default EditAccount