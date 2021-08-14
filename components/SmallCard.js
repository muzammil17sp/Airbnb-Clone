import Image from "next/image";
import Flip from "react-reveal/Flip"
const SmallCard = ({ img, location, distance }) => {
  return (
    <Flip left>
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
      <div className="relative h-16 w-16 ">
        <Image layout="fill" src={img} className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
      </div>
      </Flip>
  );
};

export default SmallCard;
