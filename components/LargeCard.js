import Image from "next/image";
import HeadShake  from "react-reveal/HeadShake"
const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="py-16 cursor-pointer relative">
      <HeadShake>
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} objectFit="cover" layout="fill" className="rounded-2xl" />
      </div>

      </HeadShake>
          <div className="absolute font-bold text-white top-32 left-12">
              <h3 className="text-4xl  mb-3">{title}</h3>
              <p className="w-72 font-normal  text-white">{description}</p>
              <button className="font-bold text-black bg-white px-4 py-2 rounded-lg mt-5">{ buttonText}</button>
      </div>
    </section>
  );
};

export default LargeCard;
