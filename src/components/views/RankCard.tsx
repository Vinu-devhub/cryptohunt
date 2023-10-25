import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export type RankCardProps = {
  item: RankItem;
};

type RankItem = {
  id?: string;
  name: string;
  thumb: string;
  price_btc: number;
  symbol: string;
  market_cap_rank: number;
};

const RankCard = ({
  name,
  thumb,
  price_btc,
  symbol,
  market_cap_rank,
}: RankItem) => {
  return (
    <Card className=" bg-[#080808] w-64 flex  gap-10 justify-between text-white p-5 border-gray-900 shadow-2xl ">
      <CardContent className=" p-0 space-y-4">
        <CardTitle className=" w-32 flex align-baseline gap-2 ">
          <img
            src={thumb}
            alt={`${name}-icon`}
            width={25}
            height={25}
            className=" bg-white rounded-full"
          />
          <span className=" truncate">{name}</span>
        </CardTitle>
        <CardDescription>
          <span className=" text-xl text-white/75 pl-1">
            ${price_btc.toFixed(6)}
          </span>
        </CardDescription>
      </CardContent>
      <CardContent className=" p-0 space-y-1">
        <p className=" text-lg uppercase">{symbol}</p>
        <p className=" text-3xl text-green-600">{market_cap_rank}</p>
      </CardContent>
    </Card>
  );
};

export default RankCard;
