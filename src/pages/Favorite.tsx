import { Card } from "@/components/ui/card";
import DataTable from "@/components/views/datatable/tablecomponents/DataTable";
import TableSkeleton from "@/components/views/datatable/tablecomponents/TableSkeleton";
import {
  Cryptocurrency,
  columns,
} from "@/components/views/datatable/tablecomponents/columns";
import { FavoriteContext } from "@/context/FavoriteContext";
import axios, { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";

const Favorite = () => {
  const [error, setError] = useState<AxiosError | unknown>();
  const [isLoading, setisLoading] = useState(false);
  const [favoriteCoins, setFavoriteCoins] = useState<Cryptocurrency[]>([]);

  useEffect(() => {
    const getMarketData = async () => {
      setisLoading(true);
      try {
        const data = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${allCoins.join(
            ",",
          )}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`,
        );
        setFavoriteCoins(data.data);
      } catch (error: AxiosError | unknown) {
        console.log("Error while getting market data   : ", error);
        setError(error);
      } finally {
        setisLoading(false);
      }
    };

    if (allCoins.length > 0) {
      getMarketData();
    }
  }, []);

  const favoriteContext = useContext(FavoriteContext);

  if (!favoriteContext) {
    return null;
  }

  const { allCoins } = favoriteContext;

  return (
    <div className=" my-10">
      {allCoins.length !== 0 ? (
        <>
          {isLoading ? (
            <TableSkeleton />
          ) : (
            <>
              {error ? (
                <h1 className=" text-red-600 text-4xl  font-semibold">
                  Something went wrong! Please try again later...
                </h1>
              ) : (
                <div className="bg-[#121318] w-full m-0 p-10 pt-12 rounded-lg">
                  <h1 className=" text-3xl text-blue-600 py-5">
                    Favorite Coins
                  </h1>
                  <DataTable columns={columns} data={favoriteCoins} />
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <Card className=" bg-[#121318] border border-gray-900 rounded-lg w-full h-80 flex items-center justify-center">
            <div className=" p-5 text-3xl text-blue-600 font-semibold text-center">
              No favorite added!
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default Favorite;
