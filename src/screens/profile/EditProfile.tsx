import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { AvatarImage } from '../account/Account'

const EditProfile = () => {
    return (
        <View>
            <ScrollView>
                <View className='bg-primary h-56 relative'>
                    <View className='h-[1px] bg-gray-500 mt-10 mx-4' />
                    <View className='flex flex-row justify-between mx-7 mt-10'>
                        <Text className='text-white'>User Profile</Text>
                        <TouchableOpacity>
                            <Text className='text-gray-400'>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='absolute bottom-[-20%] left-6'>
                        <AvatarImage navigation={''} />
                    </View>
                </View>
                <View className='mt-14 mx-7'>
                    <Text className='text-primary font-semibold text-xl'>John Cena</Text>
                    <Text className='text-xs text-gray-500'>+91 8352-164-785</Text>
                </View>
                <View className='mx-7 mt-10'>
                    <View>
                        <Text className='font-medium'>First Name</Text>
                        <TextInput placeholder='First name' className='border border-gray-400 p-1 px-3 mt-1 rounded-md bg-gray-200' />
                    </View>
                    <View className='mt-5'>
                        <Text className='font-medium'>Last Name</Text>
                        <TextInput placeholder='Last name' className='border border-gray-400 p-1 px-3 mt-1 rounded-md bg-gray-200' />
                    </View>
                    <View className='mt-5'>
                        <Text className='font-medium'>Email</Text>
                        <TextInput placeholder='Your E-mail Address...' className='border border-gray-400 p-1 px-3 mt-1 rounded-md bg-gray-200' />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile;