import React, { lazy, Suspense, FC } from "react";
import { View, Text, StyleSheet } from "react-native";

// CUSTOM IMPORT
import Header from "@/components/layout/header";

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
    const [hasError, setHasError] = React.useState(false);

    const handleError = (error: Error) => {
      console.error("Error loading component:", error);
      setHasError(true);
    };

    return (
      <React.Fragment>
        {toShowHeader ? (
          <Header />
        ) : null}
        <Suspense fallback={<LoadingIndicator />}>
          {hasError ? (
            <ErrorFallback />
          ) : (
            <React.Fragment>
              <LazyComponent {...(props as any)} />
            </React.Fragment>
          )}
        </Suspense>
      </React.Fragment>
    );
  };

  return ComponentWithErrorBoundary;
};

// Loading indicator component to show while the component is being loaded
const LoadingIndicator: FC = () => (
  <View style={styles.loadingContainer}>
    <Text>Loading...</Text>
  </View>
);

// Error fallback component to display when an error occurs
const ErrorFallback: FC = () => (
  <View style={styles.errorContainer}>
    <Text>Something went wrong while loading the component.</Text>
  </View>
);

// Define styles
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    paddingVertical: 16,
    marginTop: 40,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'red',
    padding: 20,
  },
});

// Lazy-load screens with bottom bar
export const Home = loadComponent(() => import("./@with-bottom-bar/home"),true);
export const Grounds = loadComponent(() => import("./@with-bottom-bar/grounds"),true);
export const Notification = loadComponent(() => import("./@with-bottom-bar/notification"),true);

// Lazy-load screens without bottom bar
export const Signup = loadComponent(() => import("./@without-bottom-bar/signup"),false);
export const Login = loadComponent(() => import("./@without-bottom-bar/login"),false);
export const Onboarding = loadComponent(() => import("./@without-bottom-bar/onboarding"),false);
export const Chat = loadComponent(() => import("./@without-bottom-bar/chat"),false);
export const Account = loadComponent(() => import("./@without-bottom-bar/account"),false);
