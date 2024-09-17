import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

const NextButton = () => {
    return (
        <Icon name="rightcircle" size={30} />
    )
}

const DoneButton = ({...props}) => {
    return (
        <TouchableOpacity {...props} className="bg-blue-800 mr-2 p-2 flex justify-center items-center rounded-xl">
            <View>
                <Text className="text-white">Get Started</Text>
            </View>
        </TouchableOpacity>
    )
}

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
    return (
        <Onboarding
            onSkip={() => navigation.navigate('Welcome')}
            onDone={() => navigation.navigate('Login')}
            nextLabel={<NextButton />}
            DoneButtonComponent={DoneButton}
            bottomBarHighlight={false}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../../assets/images/onboarding-img1.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../../assets/images/onboarding-img2.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../assets/images/onboarding-img3.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    );
};

export default OnboardingScreen;