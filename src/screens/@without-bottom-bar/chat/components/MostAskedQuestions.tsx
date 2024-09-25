import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const questions = [
    "Help me find a Cricket Ground",
    "I need a football turf with Canteen and washroom",
    "Can you show me some Swimming pools around me?",
    "I am looking for a venue where Hockey is played",
    "Help me find a Basketball Court near me"
];

const Questions = ({ question }: { question: string }) => (
    <TouchableOpacity>
        <View className='border border-gray-400 p-4 mx-4 rounded-md flex flex-row justify-between items-center'>
            <View className='flex flex-row items-center flex-1'>
                <View className='w-8 h-8 rounded-full bg-stone-400'></View>
                <View className='ml-2 flex-1'>
                    <Text className='text-[14px] font-medium' numberOfLines={2}>{question}</Text>
                </View>
            </View>
            <View>
                <Icon name='right' size={16} color={'#4f4f4f'} />
            </View>
        </View>
    </TouchableOpacity>
)

const MostAskedQuestions = () => {
    return (
        <View>
            <View className='bg-primary mx-4 p-4 rounded-md'>
                <Text className='text-white'>Most Asked Questions</Text>
            </View>
            {
                questions.map((question, index) => (
                    <View key={index} className='mt-5'>
                        <Questions question={question} />
                    </View>
                ))
            }
        </View>
    )
}

export default MostAskedQuestions;