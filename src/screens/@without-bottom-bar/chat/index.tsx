import React from 'react'
import { Text, View } from 'react-native'

import { NavigationProp } from '@react-navigation/native';

interface ChatProps {
  navigation: NavigationProp<any>; // Adjust the type as needed
}

const Chat: React.FC<ChatProps> = ({ navigation }) => {
  return (
    <View>
        <Text>Chat</Text>
    </View>
  )
}

export default Chat