import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface MessageInputProps {
    message: string;
    onChange: (text: string) => void;
    sendMessage: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ sendMessage, message, onChange }) => {
    return (
        <View className='border border-gray-400 rounded-full p-2 px-4 flex flex-row items-center justify-between'>
            <TextInput placeholder='Write a message...' value={message} onChangeText={onChange} />
            <TouchableOpacity onPress={sendMessage}>
                <Icon name='send' size={20} />
            </TouchableOpacity>
        </View>
    )
}

export default MessageInput;