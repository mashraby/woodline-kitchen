import React, { createContext, useState } from "react";
import { IChangeBalance } from "../interfaces/change.balance.interface";

const BalanceContext = createContext<IChangeBalance>({
  isClicked: false,
  setIsClicked: () => {},
});

function Provider({ children }: { children: React.ReactNode }) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <BalanceContext.Provider value={{ isClicked, setIsClicked }}>
      {children}
    </BalanceContext.Provider>
  );
}

export { BalanceContext, Provider };
