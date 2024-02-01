import { createContext, useEffect, useState } from "react";
import { login, logout, onAuthChange } from "../api/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. 해당 프로젝트는 auth를 사용하는 부분이
  // 헤더에만 있기 때문에 context api로 만들지 않고
  // 헤더에만 사용하는 형태로 변경하였음.

  // 1-1. => context api로 분리.
  const [user, setUser] = useState();
  // onAuthStateChanged 메소드에 두번째 파라미터로 콜백함수를 전달하면
  // 그 콜백함수가 옵저버 함수가 되어서 auth state가 변할 때마다
  // 호출되도록 내부적으로 구현이 되어있다.
  useEffect(() => {
    onAuthChange(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
