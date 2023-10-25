import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const RankSkeleton = () => {
  return (
    <Card className=" bg-[#080808] flex gap-10 justify-between text-white p-5 border-gray-900 shadow-2xl ">
      <CardContent className=" p-0 space-y-4">
        <div className=" flex gap-2">
          <Skeleton className=" w-5 h-5 rounded-full" />
          <Skeleton className=" w-24 h-4 " />
        </div>
        <div>
          <Skeleton className=" w-24 h-4 " />
        </div>
      </CardContent>
      <CardContent className=" p-0 space-y-5">
        <Skeleton className=" w-24 h-4 " />
        <Skeleton className=" w-24 h-4 " />
      </CardContent>
    </Card>
  );
};

export default RankSkeleton;
