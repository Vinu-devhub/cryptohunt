import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "./tablecomponents/DataTable";
import TableSkeleton from "./tablecomponents/TableSkeleton";
import { Cryptocurrency, columns } from "./tablecomponents/columns";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

const TableLayout = () => {
  const [error, setError] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [marketData, setMarketData] = useState<Cryptocurrency[]>([]);

  useEffect(() => {
    const getMarketData = async () => {
      setisLoading(true);
      try {
        const data = await axios.get(API_URL);
        setMarketData(data.data);
      } catch (error) {
        console.log("Error while getting market data   : ", error);
        setError(error);
      } finally {
        setisLoading(false);
      }
    };
    getMarketData();
  }, []);

  return (
    <div className="bg-[#121318] w-full m-0 p-10 pt-12 rounded-lg">
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <>
          {error ? (
            <h1 className=" text-red-600 text-4xl  font-semibold">
              Something went wrong! Please try again later....
            </h1>
          ) : (
            <DataTable columns={columns} data={marketData} />
          )}
        </>
      )}
    </div>
  );
};

export default TableLayout;
