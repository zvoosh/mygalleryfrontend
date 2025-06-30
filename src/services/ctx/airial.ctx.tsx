import React, { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { DriveItem } from "./data.ctx";

interface MyDataContextType {
  data: DriveItem[] | undefined;
  thumbnail: DriveItem[] | undefined;
  setData: React.Dispatch<React.SetStateAction<DriveItem[] | undefined>>;
  setThumbnail: React.Dispatch<React.SetStateAction<DriveItem[] | undefined>>;
}

export const MyArialFolderContext = createContext<
  MyDataContextType | undefined
>(undefined);

interface MyDataProviderProps {
  children: ReactNode;
}

export const MyArialFolderProvider: React.FC<MyDataProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<DriveItem[]>();
  const [thumbnail, setThumbnail] = useState<DriveItem[]>();

  return (
    <MyArialFolderContext.Provider
      value={{ data, setData, setThumbnail, thumbnail }}
    >
      {children}
    </MyArialFolderContext.Provider>
  );
};
