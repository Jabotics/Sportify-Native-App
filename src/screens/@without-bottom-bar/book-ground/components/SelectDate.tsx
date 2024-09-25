import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Date = () => (
    <View className='border border-gray-300 rounded-md p-1 px-4 bg-white'>
        <Text className='text-center text-[12px] text-gray-500'>Today</Text>
        <Text className='text-[14px] font-medium text-gray-600 text-center'>23 Sep</Text>
    </View>
)

const SelectDate = () => {
    return (
        <View className='border p-6 px-2 mx-6 rounded-lg bg-[#d9d9d9] border-gray-300'>
            <View className='ml-5 pb-2'>
                <Text className='text-lg font-medium text-primary'>Select Date</Text>
            </View>
            <View className='flex flex-row items-center mt-2 justify-between gap-2'>
                <View>
                    <Icon name='arrow-back-circle-outline' size={35} color={'gray'}/>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ flexDirection: 'row' }}
                >
                    {
                        Array.from({length: 5}).map((_, i) => (
                            <TouchableOpacity key={i} className='ml-2'>
                                <Date />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                <View>
                    <Icon name='arrow-forward-circle-outline' size={35} color={'gray'}/>
                </View>
            </View>
        </View>
    )
}

export default SelectDate