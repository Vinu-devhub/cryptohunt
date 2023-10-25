import { Card } from "../ui/card";

const CoinDescription = ({ description }: { description: string }) => {
  return (
    <Card className=" bg-[#121318] border border-gray-900 p-5 text-white ">
      {description ? (
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className=" text-lg whitespace-pre-wrap"
        />
      ) : (
        <p className=" text-lg whitespace-pre-wrap">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti beatae pariatur, quia quidem doloribus fugiat velit voluptatum quos vel a maiores consequatur cupiditate illo eligendi quam, quis eos fuga cum ullam! Suscipit eos non aperiam dolore velit amet, maxime expedita sed alias obcaecati. Eum voluptate voluptas natus obcaecati rerum. Odit, provident ab! Vel voluptatibus necessitatibus recusandae! Maxime quasi quam vero deserunt commodi consequatur harum rem, excepturi recusandae quidem exercitationem quod non fugiat sit provident. Totam earum aperiam eaque minima? Iure eaque quam accusamus hic mollitia esse, facilis vitae nostrum blanditiis delectus eius consequuntur rem soluta ipsam omnis nulla earum repudiandae?
        </p>
      )}
    </Card>
  );
};

export default CoinDescription;
