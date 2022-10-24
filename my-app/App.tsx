import React, { createContext, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { UserContextProvider } from "./src/hooks/UserContext";

export const UserDispatch = createContext(null);

function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <RootStack />
      </UserContextProvider>
    </NavigationContainer>
  );
}

export default App;
