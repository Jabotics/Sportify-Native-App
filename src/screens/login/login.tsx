import React, { useEffect, useRef, useState } from 'react'
import Button from '../../components/Button';
import COLORS from '../../utils/constants/colors';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useLoginMutation, useValidateOtpMutation } from '../../redux/services/auth/authApi';
import { RootState, useAppSelector } from '../../redux/store';

const Login = ({ navigation }: { navigation: any }) => {
    const [mobile, setMobile] = useState('');    
    const [otp, setOtp] = useState<string[]>(['', '', '', '']);
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const [loginAPI] = useLoginMutation();
    const [validateOTPApi, {isSuccess}] = useValidateOtpMutation();
    const showLoginForm = useAppSelector((state: RootState)=> state.auth.showLoginPage);
    const user = useAppSelector((state: RootState)=> state.auth.user);
    const otpData = useAppSelector((state: RootState)=> state.auth.resData);

    const handleInputChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to the next input when the current input is filled
        if (text && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
          }
    };

    const sendOTP = () => {
        loginAPI({mobile: mobile});
    }

    const validateOTP = () => {        
        validateOTPApi({id: otpData?.data.id, otp: otp.join('')});
    }   

    useEffect(()=>{                
        if(isSuccess) {
            navigation.navigate('Home');
            setMobile('');
            setOtp(['', '', '', '']);
        }
    },[isSuccess])

    useEffect(()=>{
        if('mobile' in user && typeof user.mobile == 'string' && user.mobile.length != 0) {
            navigation.navigate('Home');
        }
    }, [user])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Hi Welcome Back ! 👋
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Hello again you have been missed!</Text>
                </View>

                {
                    showLoginForm ?
                        <>
                            <View style={{ marginBottom: 12 }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '400',
                                    marginVertical: 8
                                }}>Mobile</Text>

                                <View style={{
                                    width: "100%",
                                    height: 48,
                                    borderColor: COLORS.black,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingLeft: 22
                                }}>
                                    <TextInput
                                        placeholder='Enter your mobile number'
                                        placeholderTextColor={COLORS.black}
                                        keyboardType='numeric'
                                        style={{
                                            width: "100%"
                                        }}
                                        value={mobile}
                                        onChangeText={(text) => setMobile(text)}
                                    />
                                </View>
                            </View>

                            <Button
                                title="Send OTP"
                                filled
                                style={{
                                    marginTop: 18,
                                    marginBottom: 4,
                                }}
                                onPress={sendOTP}
                            />
                        </>
                        : <>
                            <View className="flex-1 justify-center items-center p-4">
                                <Text className="text-2xl font-bold mb-4">Enter OTP</Text>
                                <View className="flex-row space-x-4 mb-4">
                                    {otp.map((value, index) => (
                                        <TextInput
                                            key={index}
                                            id={`otp-${index}`}
                                            ref={(ref) => (inputRefs.current[index] = ref)}
                                            className="border border-gray-300 rounded p-2 w-12 text-center text-xl"                                            
                                            keyboardType="numeric"
                                            maxLength={1}
                                            value={value}
                                            onChangeText={(text) => handleInputChange(text, index)}
                                        />
                                    ))}
                                </View>
                                <TouchableOpacity
                                    className="bg-teal-600 rounded p-2 w-full"
                                    onPress={validateOTP}
                                >
                                    <Text className="text-white text-center text-lg">Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                }
            </View>
        </SafeAreaView>
    )
}

export default Login