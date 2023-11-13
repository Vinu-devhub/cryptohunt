import { FavoriteContext } from "@/context/FavoriteContext";
import { Row } from "@tanstack/react-table";
import { Star } from "lucide-react";
import { useContext } from "react";
import { Cryptocurrency } from "./columns";

const FavoriteBtn = ({ row }: { row: Row<Cryptocurrency> }) => {
  const favoriteContext = useContext(FavoriteContext);

  if (!favoriteContext) {
    return null;
  }

  const { addCoin, allCoins, removeCoin } = favoriteContext;

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    addCoin(row.original.id);

    if (allCoins.includes(row.original.id)) {
      removeCoin(row.original.id);
    } else {
      addCoin(row.original.id);
    }
  };
  return (
    <span className=" flex items-center text-lg gap-2 text-white">
      <div onClick={(e) => handleClick(e)}>
        <Star
          className={` cursor-pointer hover:scale-150 delay-75 duration-300 ${
            allCoins.includes(row.original.id)
              ? "fill-blue-600  stroke-blue-600"
              : ""
          } `}
        />
      </div>
      {row.index + 1}
    </span>
  );
};

export default FavoriteBtn;
