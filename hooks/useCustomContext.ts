import React from "react";

type ContextType<T> = React.Context<T>;

export const useCustomContext = <T>(myContext: ContextType<T>) => {
  const context = React.useContext(myContext);
  if (myContext === undefined) {
    throw new Error("useContext must be used with existing context");
  }
  return context;
};
