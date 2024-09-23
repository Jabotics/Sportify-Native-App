import { View, Text } from 'react-native'
import React from 'react'

const Footer = () => {
    return (
        <View className='bg-primary h-[200px] flex justify-center items-center'>
            <View>
                <Text className='text-center text-white font-medium text-lg mb-2'>Sportify</Text>
                <Text className='text-white text-xs font-light'>© 2024 copyright | Sportify Pvt. Ltd.</Text>
                <Text className='text-white/60 text-xs text-center font-light mt-1'>Terms | Privacy Policy</Text>
            </View>
        </View>
    )
}

export default Footer