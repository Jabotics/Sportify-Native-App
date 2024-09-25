import { Image, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { NavigationProp } from '@react-navigation/native';

// CUSTOM IMPORTS
import { onboardingPages } from "@constants";
import NextButton from "./next-button";

import { onboardingStyles } from "@/styles/screens/onboarding";
import COLORS from "@/styles/abstracts/colors";

const OnboardingScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("BookGround")}
      onDone={() => navigation.navigate("Home")}
      nextLabel={<NextButton />}
      bottomBarHighlight={false}
      bottomBarHeight={90}
      controlStatusBar={false}
      DotComponent={({ selected }) => (
        <View
          className={`h-2 rounded mx-1 ${selected ? "w-5" : "w-2"} ${
            selected ? `bg-[${COLORS.primary}]` : "bg-transparent"
          }`}
          style={{
            ...onboardingStyles.dots,
            width: selected ? 20 : 8,
            backgroundColor: selected ? COLORS.primary : "#00000000",
            borderColor: selected ? "#00000000" : COLORS.primary,
          }}
        />
      )}
      pages={onboardingPages.map(page => ({
        ...page,
        image: <Image source={page.image} />, 
      }))}
      containerStyles={onboardingStyles.container}
      titleStyles={onboardingStyles.title}
      subTitleStyles={onboardingStyles.subtitle}
      // DoneButtonComponent={DoneButton}
    />
  );
};

export default OnboardingScreen;
