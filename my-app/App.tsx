import React, { createContext, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserContextProvider } from "./src/context/UserContext";

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <UserContextProvider>
          <RootStack />
        </UserContextProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
