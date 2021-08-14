import Image from "next/image";
import Fade from "react-reveal/Zoom"
const Banner = () => {
  return (
    <div className="relative  h-[600px]  ">
      <Image
        src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
      />
      <Fade right>
      <div className="absolute mt-20 left-12  ">
        <h1 className="w-60  text-3xl   md:text-5xl  text-white font-bold">
          Olympian & Paralympian Online Experiences
        </h1>
        <button className="bg-white text-black px-4 py-2  shadow-md rounded-md  my-3 hover:shadow-xl active:scale-90  trasition duration-150">
         Explore Now
        </button>
        </div>
        </Fade>
    </div>
  );
};

export default Banner;
