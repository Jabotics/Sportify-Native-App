import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { MostAskedQuestions, MessageInput, InitialChat, Messages } from './components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Chat = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [message, setMessage] = useState('');
  const messageArr = useRef<{ type: string, message: string }[]>([]);

  const sendMessage = () => {
    if (message.trim()) {
      // console.log('message sent', message);
      messageArr.current.push({
        type: "ic",
        message: message
      })
    }
    setMessage('');
    setShowMessages(true)
  }

  const handleChange = (text: string) => {
    setMessage(text)
  }

  // useEffect(()=> {
  //   if(message.length != 0) {
  //     setShowMessages(true);
  //   }
  // }, [message]);

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
        {
          showMessages ? <Messages messages={messageArr.current}/> : <InitialChat />
        }
      </ScrollView>
      <View className='mx-4 mb-2'>
        <MessageInput sendMessage={sendMessage} onChange={handleChange} message={message} />
      </View>
    </SafeAreaView>
  );
}

export default Chat;
