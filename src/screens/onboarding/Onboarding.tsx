import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

const NextButton = () => {
    return (
        <Icon name="rightcircle" size={30} />
    )
}

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
    return (
        <Onboarding
            onSkip={() => navigation.navigate('Main')}
            onDone={() => navigation.navigate('Main')}
            nextLabel={<NextButton />}            
            bottomBarHighlight={false}
            bottomBarHeight={90}
            controlStatusBar={false}
            DotComponent={({selected}) => (
                <View className={`h-2 rounded mx-1 ${selected ? 'w-5' : 'w-2'} ${selected ? 'bg-[#000]' : 'bg-[#e0e0e0]'}`}/>
            )}
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
                    backgroundColor: '#D7F4F5',
                    image: <Image source={require('../../assets/images/onboarding-img3.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    );
};

export default OnboardingScreen;