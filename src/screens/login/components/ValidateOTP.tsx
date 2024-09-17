import React, { useRef, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RootState, useAppSelector } from '../../../redux/store';
import { useValidateOtpMutation } from '../../../redux/services/auth/authApi';

const ValidateOTP = () => {
    const [otp, setOtp] = useState<string[]>(['', '', '', '']);
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const otpData = useAppSelector((state: RootState)=> state.auth.resData);
    const [validateOTPApi, {isSuccess}] = useValidateOtpMutation();

    const handleInputChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to the next input when the current input is filled
        if (text && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
          }
    };

    const validateOTP = () => {        
        validateOTPApi({id: otpData?.data.id, otp: otp.join('')});
    }   

    return (
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
    )
}

export default ValidateOTP