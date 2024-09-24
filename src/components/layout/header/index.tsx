import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

// CUSTOM IMPORTS
import Topbar from "./top-bar";
import Searchbar from "./search-bar";

import { headerStyles } from "@/styles/layout/header";

const Header = ({
  showConf,
}: {
  showConf: {
    topBar: boolean;
    searchBar: boolean;
  };
}) => {
  const { topBar, searchBar } = showConf;

  const topBarOpacity = useSharedValue(topBar ? 1 : 0);
  const searchBarOpacity = useSharedValue(searchBar ? 1 : 0);

  useEffect(() => {
    topBarOpacity.value = withTiming(topBar ? 1 : 0, { duration: 300 });
    searchBarOpacity.value = withTiming(searchBar ? 1 : 0, { duration: 300 });
  }, [topBar, searchBar]);

  // Animated styles
  const animatedTopBarStyle = useAnimatedStyle(() => ({
    opacity: topBarOpacity.value,
  }));

  const animatedSearchBarStyle = useAnimatedStyle(() => ({
    opacity: searchBarOpacity.value,
  }));

  return (
    <SafeAreaView style={headerStyles.container}>
      <Animated.View style={[animatedTopBarStyle]}>
        {topBar && <Topbar />}
      </Animated.View>
      <Animated.View style={[animatedSearchBarStyle]}>
        {searchBar && <Searchbar />}
      </Animated.View>
    </SafeAreaView>
  );
};

export default Header;
