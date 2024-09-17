import Button from '../../components/Button';
import COLORS from '../../utils/constants/colors';
import ValidateOTP from './components/ValidateOTP';
import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { RootState, useAppSelector } from '../../redux/store';
import { useLoginMutation, useValidateOtpMutation } from '../../redux/services/auth/authApi';

const Login = ({ navigation }: { navigation: any }) => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState<string[]>(['', '', '', '']);
    const [loginAPI] = useLoginMutation();
    const [validateOTPApi, { isSuccess }] = useValidateOtpMutation();
    const showLoginForm = useAppSelector((state: RootState) => state.auth.showLoginPage);
    const user = useAppSelector((state: RootState) => state.auth.user);
    const otpData = useAppSelector((state: RootState) => state.auth.resData);

    const sendOTP = () => {
        loginAPI({ mobile: mobile });
    }

    useEffect(() => {
        if (isSuccess) {
            navigation.navigate('Home');
            setMobile('');
            setOtp(['', '', '', '']);
        }
    }, [isSuccess]);

    useEffect(() => {
        if ('mobile' in user && typeof user.mobile == 'string' && user.mobile.length != 0) {
            navigation.navigate('Home');
        }
    }, [user]);

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
                            <ValidateOTP />
                        </>
                }
            </View>
        </SafeAreaView>
    )
}

export default Login