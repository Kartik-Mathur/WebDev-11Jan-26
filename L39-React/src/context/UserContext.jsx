import React, { createContext, useContext } from "react";
const context = createContext();

const UserContext = ({ children }) => {
  return (
    <context.Provider
      value={{
        name: "Kartik",
        email: "Kartik@gmail.com",
      }}
    >

      {children}

    </context.Provider>
  );
};

export default UserContext;
export { context };
