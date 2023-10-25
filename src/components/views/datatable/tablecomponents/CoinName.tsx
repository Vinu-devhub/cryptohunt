const CoinName = ({
  img,
  name,
  symbol,
}: {
  img: string;
  name: string;
  symbol: string;
}) => {
  return (
    <div className=" flex gap-3 items-center">
      <img src={img} alt={`${name}-icon`} width={25} height={25} />
      <p className=" text-lg text-white font-bold">
        {name} <span className=" ml-3 font-medium text-white/40 uppercase">{symbol}</span>{" "}
      </p>
    </div>
  );
};

export default CoinName;
