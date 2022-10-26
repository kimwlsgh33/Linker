import React, { createContext } from "react";
import RootStack from "./src/navigation/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserContextProvider } from "./src/context/UserContext";
import { NavigationContainer } from "@react-navigation/native";

export const UserDispatch = createContext(null);

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <UserContextProvider>
          <RootStack />
        </UserContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
