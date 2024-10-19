import React from "react";
import { AppStateStatus, AppState } from "react-native";

interface AppStateContextData {
  appStateVisible: AppStateStatus
}

export const AppStateContext = React.createContext<AppStateContextData>(
  {} as AppStateContextData
);

export const AppStateProvider = ({ children }) => {
  const appState = React.useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = React.useState(
    appState.current
  );

  React.useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        appStateVisible,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};