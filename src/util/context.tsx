import React, { createContext, useState } from "react";
import { getStoredItem, storeItem } from "./lib";

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  isUser: boolean;
  login: (e: string) => void;
  logout: () => void;
  user: any;
  setUser: (e: any) => void;
  token: string;
}>({
  isAuthenticated: false,
  isUser: false,
  login: () => {},
  logout: () => {},
  user: "",
  setUser: () => {},
  token: "",
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialUser = getStoredItem("user") || "";
  const initialToken = getStoredItem("token");

  const [token, setToken] = useState(initialToken);
  const [userDetail, setUserDetail] = useState(initialUser);

  const isAuthenticated = !!token;
  const isUser = !!userDetail;

  function login(token: string) {
    storeItem("token", token, 86400000);
    setToken(token);
  }

  async function logout() {
    setToken(null);
    setUserDetail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  function setUser(user: any) {
    setUserDetail(user);
  }

  const value = {
    token,
    login,
    logout,
    user: userDetail,
    isAuthenticated,
    setUser,
    isUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
