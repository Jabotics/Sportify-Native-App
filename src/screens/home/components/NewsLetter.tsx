import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NewsLetter = () => {
    return (
        <View className='mx-7'>
            <View>
                <Text className='text-primary text-lg'>Subscribe to</Text>
                <Text className='text-primary text-2xl font-bold'>Our Newsletter!</Text>
                <Text className='text-md text-gray-600'>Subscribe to our newsletter and stay updated</Text>
            </View>
            <View className='mt-8'>
                <View className='flex flex-row border p-2 rounded-md items-center'>
                    <Icon name='email-newsletter' size={20} />
                    <TextInput placeholder='Your Email' className='ml-2' />
                </View>
                <TouchableOpacity className='p-2 border bg-primary rounded-md mt-3'>
                    <Text className='text-center text-white text-lg'>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewsLetter