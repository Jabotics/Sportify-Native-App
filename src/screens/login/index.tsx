import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ValidateOTP from './components/ValidateOTP';

const Login = ({navigation}: {navigation: any}) => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                    <View className='bg-primary h-72'></View>
                    <View>
                        <View className='flex items-center mt-7'>
                            <View>
                                <Image source={require('../../assets/images/onboarding-img1.png')} className='w-16 h-16' />
                                <Text className='text-center font-bold text-2xl italic mt-4 text-primary'>Sportify</Text>
                            </View>
                        </View>
                        {showLoginForm ? (
                            <>
                                <View className='mt-32'>
                                    <Text className='mx-10 font-semibold text-base'>Mobile</Text>
                                    <View className='flex flex-row items-center p-2 px-3 border mt-2 mx-10 rounded-md'>
                                        <Icon name='mobile1' size={20} />
                                        <TextInput
                                            placeholder='Mobile number'
                                            className='ml-2'
                                            keyboardType='numeric'
                                        />
                                    </View>
                                </View>
                                <View className='mt-16'>
                                    <TouchableOpacity className='bg-primary p-3 mx-10 rounded-md' onPress={()=> navigation.navigate('Main')}>
                                        <Text className='text-center text-white text-base'>Log in</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                            <ValidateOTP />
                        )}
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;
