import React, { createContext, useContext, useState } from "react";

type SelectedGamesContextType = {
  selectedGamesKeys: React.Key[];
  setSelectedGamesKeys: React.Dispatch<React.SetStateAction<React.Key[]>>;
};

const SelectedGamesContext = createContext<
  SelectedGamesContextType | undefined
>(undefined);

export const SelectedGamesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedGamesKeys, setSelectedGamesKeys] = useState<React.Key[]>([]);

  console.log("SelectedGamesKeys:", selectedGamesKeys);

  return (
    <SelectedGamesContext.Provider
      value={{ selectedGamesKeys, setSelectedGamesKeys }}
    >
      {children}
    </SelectedGamesContext.Provider>
  );
};

export const useSelectedGames = () => {
  const context = useContext(SelectedGamesContext);
  if (!context)
    throw new Error(
      "useSelectedGames must be used within a SelectedGamesProvider",
    );
  return context;
};
