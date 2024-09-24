import { lazy, Suspense, FC, Fragment, useState, useRef } from "react";
import { Image, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
// CUSTOM IMPORT
import Header from "@/components/layout/header";
import Loading from "@/components/loading";
import ErrorFallback from "@/components/error-fallback";

import COLORS from "@/styles/abstracts/colors";

const headerConfigCache = new WeakMap();
// Custom gradient colors
const gradientColors = [COLORS.primary, "#fff", "#fff"];

/**
 * A higher-order function to load components dynamically with error handling.
 *
 * @param importFunc - A function that returns a promise resolving to
 *                     the default export of the component to be loaded.
 * @param toShowHeader - A boolean flag indicating whether to show the header and search bar.
 * @returns A functional component that lazily loads the specified component
 *          with error handling capabilities.
 */
const loadComponent = (
  importFunc: () => Promise<{ default: FC<any> }>,
  toShowHeader: boolean = true,
  toShowBackground: boolean = false,
  topBar: boolean = true,
  searchBar: boolean = true
): FC => {
  const LazyComponent = lazy(importFunc);

  /**
   * A functional component that wraps the lazy-loaded component with
   * error handling.
   *
   * @param props - The props to be passed to the lazy-loaded component.
   * @returns The lazy-loaded component or an error fallback.
   */
  const ComponentWithErrorBoundary: FC = (props) => {
    const [hasError, setHasError] = useState(false);
    const configKey = useRef({ topBar, searchBar }).current;

    const handleError = (error: Error) => {
      console.error("Error loading component:", error);
      setHasError(true);
    };

    let headerShowConf = headerConfigCache.get(configKey);
    if (!headerShowConf) {
      // Create and cache the configuration
      headerShowConf = { topBar, searchBar };
      headerConfigCache.set(configKey, headerShowConf);
    }

    return (
      <Fragment>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={toShowBackground ? gradientColors : ["#fff", "#fff"]}
          style={{
            flex: 1, // Ensures the gradient covers the entire screen
          }}
        >
          {toShowHeader ? (
            <View className="z-20">
              <Header showConf={headerShowConf} />
            </View>
          ) : null}
          <Suspense fallback={<Loading />}>
            {hasError ? (
              <ErrorFallback />
            ) : (
              <Fragment>
                {toShowBackground ? (
                  <Image
                    source={require("@/assets/images/patterns/pattern3.png")}
                    className="absolute -z-0"
                  />
                ) : null}
                <LazyComponent {...(props as any)} />
              </Fragment>
            )}
          </Suspense>
        </LinearGradient>
      </Fragment>
    );
  };

  return ComponentWithErrorBoundary;
};

// Lazy-load screens with bottom bar
export const Home = loadComponent(
  () => import("./@with-bottom-bar/home"),
  true,
  true,
  true,
  true
);
export const Grounds = loadComponent(
  () => import("./@with-bottom-bar/grounds"),
  true,
  false,
  false,
  true
);
export const Notification = loadComponent(
  () => import("./@with-bottom-bar/notification"),
  true,
  false,
  true,
  true
);

// Lazy-load screens without bottom bar
export const Signup = loadComponent(
  () => import("./@without-bottom-bar/signup"),
  false,
  false,
  true,
  true
);
export const Login = loadComponent(
  () => import("./@without-bottom-bar/login"),
  false,
  false,
  true,
  true
);
export const Onboarding = loadComponent(
  () => import("./@without-bottom-bar/onboarding"),
  false,
  false,
  true,
  true
);
export const Chat = loadComponent(
  () => import("./@without-bottom-bar/chat"),
  false,
  false,
  true,
  true
);
export const Account = loadComponent(
  () => import("./@without-bottom-bar/account"),
  false,
  false,
  true,
  true
);
