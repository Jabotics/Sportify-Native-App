import React, { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootState, useAppSelector } from "@/store";
import { useValidateOtpMutation } from "@/store/actions/auth/authApi";

const ValidateOTP = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const otpData = useAppSelector((state: RootState) => state.auth.resData);
  const [validateOTPApi, { isSuccess }] = useValidateOtpMutation();

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
    validateOTPApi({ id: otpData?.data.id, otp: otp.join("") });
  };

  return (
    <View className="flex justify-center items-center mt-32 mx-10">
      <View className="flex-row space-x-4 mb-4">
        {otp.map((value, index) => (
          <TextInput
            key={index}
            id={`otp-${index}`}
            ref={(ref) => (inputRefs.current[index] = ref)}
            className="border border-gray-300 rounded p-3 w-14 text-center text-xl"
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleInputChange(text, index)}
          />
        ))}
      </View>
      <View className="w-full">
        <TouchableOpacity
          className="bg-primary rounded-md p-2 w-full mt-8"
          onPress={validateOTP}
        >
          <Text className="text-white text-center text-lg">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ValidateOTP;
