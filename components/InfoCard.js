import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/outline";
import Fade from "react-reveal/Fade";
const InfoCard = ({
  img,
  title,
  description,
  price,
  total,
  star,
  location,
}) => {
  return (
    <Fade left>
      <div className="flex  flex-col lg:flex-row py-7 px-1 border-b cursor-pointer  hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
        <div className="relative h-48 w-full  md:w-80 md:h-52 flex-shrink-0 m-auto">
          <Image
            className="rounded-2xl hover:scale-150 overflow-hidden transition duration-300 ease-in-out"
            src={img}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col flex-grow  pl-2 xl:pl-6 mt-3">
          <div className="flex justify-between">
            <p>{location}</p>
            <HeartIcon className="h-6 cursor-pointer" />
          </div>
          <h4 className="text-xl">{title}</h4>
          <div className="border-b w-10 py-2" />
          <p className="pt-2 text-sm text-gray-500">{description}</p>
          <div className="flex justify-between pt-5">
            <p className="flex">
              <StarIcon className="h-6 text-red-500" /> {star}
            </p>
            <div>
              <p className="tetx-lg font-semibold pb-2 lg:text-2xl">{price}</p>
              <p className="text-right  font-extralight">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default InfoCard;
