import { FavoriteContext } from "@/context/FavoriteContext";
import { Star } from "lucide-react";
import { useContext } from "react";

const FavoriteBtn = ({ row }) => {
  const { addCoin, allCoins, removeCoin } = useContext(FavoriteContext);

  const handleClick = (evt) => {
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
      <div>
        <Star
          onClick={(e) => handleClick(e)}
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
