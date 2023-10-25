import CardSkeleton from "@/components/views/CardSkeleton";
import CoinDescription from "@/components/views/CoinDescription";
import CoinDetailCard from "@/components/views/CoinDetailCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://api.coingecko.com/api/v3/coins/";

const CoinDetail = () => {
  const params = useParams();

  const [error, setError] = useState<undefined | unknown>(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [coinData, setcoinData] = useState<any>([]);

  useEffect(() => {
    const getcoinData = async () => {
      setisLoading(true);
      try {
        const data = await axios.get(`${API_URL}${params?.id}`);
        setcoinData(data.data);
      } catch (error) {
        console.log("Error while getting coin data   : ", error);
        setError(error);
      } finally {
        setisLoading(false);
      }
    };
    getcoinData();
  }, [params?.id]);

  if (error) {
    return (
      <div className=" text-4xl font-semibold text-center py-16 text-red-600">
        Something went wrong! Please try again later...
      </div>
    );
  }

  return (
    <div className=" flex flex-col gap-12 py-12 text-white">
      {isLoading || coinData.length === 0 ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <>
          <CoinDetailCard
            name={coinData?.name}
            symbol={coinData?.symbol}
            image={coinData.image?.small}
            market_cap_rank={coinData?.market_cap_rank}
            category={coinData?.categories[1]}
            watchlist_portfolio_users={coinData?.watchlist_portfolio_users}
            current_price={coinData?.market_data?.current_price?.usd}
            low_24h={coinData?.market_data?.low_24h.usd}
            high_24h={coinData?.market_data?.high_24h.usd}
            price_change_percentage_24h={
              coinData?.market_data?.price_change_percentage_24h
            }
            price_change_24h={coinData?.market_data?.price_change_24h}
          />
          <CoinDescription description={coinData?.description?.en} />
        </>
      )}
    </div>
  );
};

export default CoinDetail;
