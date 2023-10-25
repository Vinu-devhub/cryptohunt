import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import RankCard, { RankCardProps } from "./RankCard";
import RankSkeleton from "./RankSkeleton";

const TrendingCard = () => {
  const [trendingCoins, setTrendingCoins] = useState<RankCardProps[]>([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setTrendingCoins(response.data.coins.slice(0, 5));
      })
      .catch((error) => {
        console.log("Error while getting trending coins : ", error);
      });
  }, []);

  return (
    <Card className=" bg-[#121318] border-none space-y-16 p-5 ">
      <CardHeader className=" p-0">
        <CardTitle className=" text-white text-3xl">
          Cryptocurrency Prices by Market Cap
        </CardTitle>
        <CardDescription className=" text-base py-2">
          The global cryptocurrency market cap today is $1.17 Trillion, a{" "}
          <span className=" text-green-600">4.3% </span>
          change in the last 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className=" flex justify-between overflow-x-scroll xl:overflow-x-hidden gap-5 p-0">
        {trendingCoins.length !== 0
          ? trendingCoins.map((trendingCoin) => (
              <RankCard
                key={trendingCoin?.item?.id}
                name={trendingCoin?.item?.name}
                symbol={trendingCoin?.item.symbol}
                thumb={trendingCoin?.item.thumb}
                price_btc={trendingCoin?.item.price_btc}
                market_cap_rank={trendingCoin?.item.market_cap_rank}
              />
            ))
          : [1, 2, 3, 4, 5].map((i) => <RankSkeleton key={i} />)}
      </CardContent>
    </Card>
  );
};

export default TrendingCard;
