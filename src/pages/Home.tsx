import TrendingCard from "@/components/views/TrendingCard";
import TableLayout from "@/components/views/datatable/TableLayout";

const Home = () => {
  return (
    <div className=" flex flex-col gap-12 py-12 text-white">
      <TrendingCard />
      <TableLayout />
    </div>
  );
};

export default Home;
