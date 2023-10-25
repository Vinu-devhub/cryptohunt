import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import CoinName from "./CoinName";
import FavoriteBtn from "./FavoriteBtn";

export type Cryptocurrency = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  total_volume: number;
};

export const columns: ColumnDef<Cryptocurrency>[] = [
  {
    accessorKey: "market_rank",
    header: () => {
      return <span className=" text-2xl font-bold">#</span>;
    },
    cell: ({ row }) => <FavoriteBtn row={row} />,
  },
  {
    accessorKey: "name",
    header: () => {
      return <span className=" text-lg font-bold">Coin Name</span>;
    },
    cell: ({ row }) => {
      return (
        <Link to={`/coin/${row.original.id}`}>
          <CoinName
            img={row.original.image}
            name={row.original.name}
            symbol={row.original.symbol}
          />
        </Link>
      );
    },
  },
  {
    accessorKey: "current_price",
    header: () => {
      return <span className=" text-lg font-bold">Price</span>;
    },
    cell: ({ row }) => {
      return (
        <span className=" text-base text-white font-semibold truncate ">
          ${row.original.current_price}
        </span>
      );
    },
  },
  {
    accessorKey: "price_change_percentage_24h",
    header: () => {
      return <span className=" text-lg font-bold">24h %</span>;
    },
    cell: ({ row }) => {
      return (
        <span
          className={`text-base font-semibold truncate ${
            row.original.price_change_percentage_24h > 0
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {row.original.price_change_percentage_24h.toPrecision(2)}%
        </span>
      );
    },
  },
  {
    accessorKey: "high_24h",
    header: () => {
      return <span className=" text-lg font-bold">24h High</span>;
    },
    cell: ({ row }) => {
      return (
        <span className={`text-base text-white font-semibold truncate`}>
          ${row.original.high_24h}
        </span>
      );
    },
  },
  {
    accessorKey: "low_24h",
    header: () => {
      return <span className=" text-lg font-bold">24h Low</span>;
    },
    cell: ({ row }) => {
      return (
        <span className={`text-base text-white font-semibold truncate`}>
          ${row.original.low_24h}
        </span>
      );
    },
  },
  {
    accessorKey: "market_cap",
    header: () => {
      return <span className=" text-lg font-bold">Market Cap</span>;
    },
    cell: ({ row }) => {
      return (
        <span className=" text-base text-white/50 font-semibold truncate ">
          ${row.original.market_cap}
        </span>
      );
    },
  },
  {
    accessorKey: "total_volume",
    header: () => {
      return <span className=" text-lg font-bold">Total Volume</span>;
    },
    cell: ({ row }) => {
      return (
        <span className=" text-base text-white/50 font-semibold truncate ">
          ${row.original.total_volume}
        </span>
      );
    },
  },
];
