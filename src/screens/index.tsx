import { lazy, Suspense, FC, Fragment, useState } from "react";

// CUSTOM IMPORT
import Header from "@/components/layout/header";
import Loading from "@/components/loading";
import ErrorFallback from "@/components/error-fallback";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "@/styles/abstracts/colors";

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
  toShowHeader: boolean = true
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

    const handleError = (error: Error) => {
      console.error("Error loading component:", error);
      setHasError(true);
    };

    return (
      <Fragment>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={gradientColors}
          style={{
            flex: 1, // Ensures the gradient covers the entire screen
          }}
        >
          {toShowHeader ? <Header /> : null}
          <Suspense fallback={<Loading />}>
            {hasError ? (
              <ErrorFallback />
            ) : (
              <Fragment>
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
  true
);
export const Grounds = loadComponent(
  () => import("./@with-bottom-bar/grounds"),
  true
);
export const Notification = loadComponent(
  () => import("./@with-bottom-bar/notification"),
  true
);

// Lazy-load screens without bottom bar
export const Signup = loadComponent(
  () => import("./@without-bottom-bar/signup"),
  false
);
export const Login = loadComponent(
  () => import("./@without-bottom-bar/login"),
  false
);
export const Onboarding = loadComponent(
  () => import("./@without-bottom-bar/onboarding"),
  false
);
export const Chat = loadComponent(
  () => import("./@without-bottom-bar/chat"),
  false
);
export const Account = loadComponent(
  () => import("./@without-bottom-bar/account"),
  false
);
