import { View, Text } from 'react-native';
import React from 'react';

const OutgoingMessage: React.FC<MsgProps> = ({ message }) => (
  <View className='bg-primary w-56 p-3 pb-6 rounded-l-lg rounded-tr-xl'>
    <Text className='text-white'>{message}</Text>
  </View>
);

const IncomingMessage = () => (
  <View className='bg-[#84a8e3] w-56 p-3 pb-6 rounded-r-lg rounded-tl-xl'>
    <Text className='text-white'>Hello, how can i help you</Text>
  </View>
);

interface Props {
  messages: { type: string, message: string }[];
}

interface MsgProps {
  message: string;
}

const Messages: React.FC<Props> = (props) => {
  return (
    <View style={{flexDirection: 'column-reverse'}}>
      <View className='flex items-end mx-5'>
        {
          props.messages.map((msg, i) => (
            <View key={i} className='mt-2'>
              <OutgoingMessage message={msg.message} />
            </View>
          ))
        }
      </View>
      <View className='flex mx-5 mt-2'>
        {/* <IncomingMessage /> */}
      </View>
    </View>
  )
}

export default Messages