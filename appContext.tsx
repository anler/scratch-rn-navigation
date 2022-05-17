import React, { useContext, useState } from "react";

const AppContext = React.createContext({ name: "My App" });

export const AppProvicer = ({ children }: { children: JSX.Element }) => {
  const [state] = useState(() => ({ name: "My App" }));

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
