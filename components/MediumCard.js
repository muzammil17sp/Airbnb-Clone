import Image from "next/image";
import Zoom from "react-reveal/Zoom";
const MediumCard = ({ img, title }) => {
  return (
    <Zoom left>
      <div className="cursor-pointer hover:scale-105  transition duration-300 ease-out ">
        <div className="relative h-80 w-80">

          <Image layout="fill" src={img} className="rounded-xl hover:scale-150 transition duration-500 ease-in-out" />
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
      </div>
    </Zoom>
  );
};

export default MediumCard;
