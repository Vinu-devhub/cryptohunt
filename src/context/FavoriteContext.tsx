import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext({});

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allCoins, setAllCoins] = useState<string[]>([]);

  const { setItem, getItem } = useLocalStorage("coins");

  const addCoin = (coinId: string) => {
    const oldCoins = getItem();
    if (oldCoins.includes(coinId)) {
      return null;
    }

    const newCoins = [...oldCoins, coinId];
    setAllCoins(newCoins);
    setItem(newCoins);
  };

  const removeCoin = (coinId: string) => {
    const oldCoins = getItem();
    const newCoins = oldCoins.filter((id) => id !== coinId);

    setAllCoins(newCoins);
    setItem(newCoins);
  };

  useEffect(() => {
    const isThereCoins = getItem();

    if (!isThereCoins) {
      setItem([]);
    } else {
      const coins = getItem();
      setAllCoins(coins);
    }
  }, []);

  return (
    <FavoriteContext.Provider value={{ addCoin, removeCoin, allCoins }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
