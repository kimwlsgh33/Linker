import React, { createContext } from "react";
import RootStack from "./src/navigation/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserContextProvider } from "./src/context/UserContext";

export const UserDispatch = createContext(null);

function App() {
  return (
      <SafeAreaProvider>
        <UserContextProvider>
          <RootStack />
        </UserContextProvider>
      </SafeAreaProvider>

  );
}

export default App;
