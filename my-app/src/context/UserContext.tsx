import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { User } from "../models";

type Values = {
  me: User;
  setMe: Dispatch<SetStateAction<User>>;
};

const initialValues: Values = {
  me: null,
  setMe: () => {},
};

const UserContext = createContext(initialValues);

export function UserContextProvider({ children }) {
  const [me, setMe] = useState(null);
  return (
    <UserContext.Provider value={{ me, setMe }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
