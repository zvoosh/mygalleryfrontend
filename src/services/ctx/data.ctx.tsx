import React, { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type DriveItem = {
  id: string;
  name: string;
  mimeType: string;
  children?: DriveItem[];
};

interface MyDataContextType {
  data: DriveItem | undefined;
  setData: React.Dispatch<React.SetStateAction<any | undefined>>;
}

export const MyDataContext = createContext<MyDataContextType | undefined>(
  undefined
);

interface MyDataProviderProps {
  children: ReactNode;
}

export const MyDataProvider: React.FC<MyDataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DriveItem>();

  return (
    <MyDataContext.Provider value={{ data, setData }}>
      {children}
    </MyDataContext.Provider>
  );
};
