import { View, Text } from 'react-native'
import React from 'react'
import { SelectDate, Slots } from './components'
import { SafeAreaView } from 'react-native-safe-area-context'

const BookGround = () => {
    return (
        <SafeAreaView>
            <View className='mt-20'>
                <SelectDate />
            </View>
            <View className='mt-10'>
                <Slots />
            </View>
        </SafeAreaView>
    )
}

export default BookGround