import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationProp } from '@react-navigation/native';

const NextButton = () => {
  return <Icon name="rightcircle" size={30} />;
};

// const DoneButton = ({...props}) => {
//     return (
//         <TouchableOpacity {...props} className="bg-blue-800 mr-2 p-2 flex justify-center items-center rounded-xl">
//             <View>
//                 <Text className="text-white">Get Started</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

const OnboardingScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("Welcome")}
      onDone={() => navigation.navigate("PrimaryNavigation")}
      nextLabel={<NextButton />}
      // DoneButtonComponent={DoneButton}
      bottomBarHighlight={false}
      bottomBarHeight={90}
      controlStatusBar={false}
      DotComponent={({ selected }) => (
        <View
          className={`h-2 rounded mx-1 ${selected ? "w-5" : "w-2"} ${
            selected ? "bg-[#000]" : "bg-[#e0e0e0]"
          }`}
        />
      )}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={require("@/assets/images/onboarding/onboarding-img1.png")}
            />
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              source={require("@/assets/images/onboarding/onboarding-img2.png")}
            />
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#D7F4F5",
          image: (
            <Image
              source={require("@/assets/images/onboarding/onboarding-img3.png")}
            />
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
