import { View, Text } from 'react-native'
import React from 'react'
import  MostAskedQuestions  from './MostAskedQuestions'

const InitialChat = () => {
    return (
        <>
            <View>
                <MostAskedQuestions />
            </View>
            <View className='mt-24 mx-5'>
                <View className='border-t border-gray-300'>
                    <Text className='mt-5 text-[10px] text-gray-500'>
                        Hi there! I’m your friendly website bot, here to help you navigate and find what you need. Whether you have questions, need assistance, or just want to chat, I’m here 24/7 to make your experience smoother and more enjoyable. Just type away, and I’ll do my best to assist you!
                    </Text>
                </View>
            </View>
        </>
    )
}

export default InitialChat