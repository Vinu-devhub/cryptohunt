import { Info, TrendingDown, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Progress } from "../ui/progress";

type CoinDetailProps = {
  name: string;
  symbol: string;
  market_cap_rank: number;
  category: string;
  watchlist_portfolio_users: number;
  image: string;
  current_price: number;
  low_24h: number;
  high_24h: number;
  price_change_percentage_24h: number;
  price_change_24h: number;
};

const CoinDetailCard = (props: CoinDetailProps) => {
  return (
    <Card className=" bg-[#121318] text-white border border-gray-900">
      <CardHeader>
        <CardTitle>Market stats</CardTitle>
      </CardHeader>
      <CardContent className=" flex items-start justify-between">
        <div className=" space-y-6">
          <div className=" flex items-center gap-4">
            <img src={props.image} alt="" className=" w-10 h-10" />
            <p className=" text-2xl font-semibold  ">{props.name}</p>
            <span className=" text-blue-800 uppercase">{props.symbol}</span>
          </div>
          <div className=" flex gap-5 pl-2 text-white/50">
            <p>Rank # {props.market_cap_rank}</p>
            <p>{props.category}</p>
            <p>On {props.watchlist_portfolio_users} watchlists</p>
          </div>
        </div>
        <div className=" space-y-6">
          <div className=" flex justify-between gap-32 items-center">
            <p className=" text-4xl font-semibold ">
              ${props.current_price}
              <span className=" pl-2 text-base text-green-600">
                {props.price_change_percentage_24h > 0 ? (
                  <>
                    {props.price_change_percentage_24h?.toFixed(2)}%{" "}
                    <TrendingUp size={20} className=" inline" />
                  </>
                ) : (
                  <>
                    {props.price_change_percentage_24h?.toFixed(2)}%{" "}
                    <TrendingDown size={20} className=" inline" />
                  </>
                )}
              </span>
            </p>
            <p className=" flex items-center gap-4 text-white/50 ">
              <span className=" capitalize">{props.name}</span>Price in USD
              <Info size={16} />
            </p>
          </div>
          <div className=" space-y-3">
            <p className=" text-lg text-white/60">High/Low Price</p>
            <Progress value={50} className=" bg-white/80 h-2 " />
            <div className=" flex justify-between text-white/40">
              <span>Low: ${props.low_24h}</span>
              <span>high: ${props.high_24h}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinDetailCard;
