import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  GlobeAltIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { DateRangePicker,DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";

const Header = ({placeholder}) => {
  const [Input, setInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [Guest, setGuest] = useState(1);
  const router = useRouter();

  const handleDateChanger = (e) => {
    setstartDate(e.selection.startDate);
    setendDate(e.selection.endDate);
  };
  const searchPlace = () => {
    router.push({
      pathname: "/search",
      query: {
        location: Input,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        Guest,
      },
    });
  };
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  return (
    <header className=" z-20 sticky top-0 grid grid-cols-1 md:grid-cols-3  shadow-md p-5 md:px-10 bg-white  ">
      <div className="hidden md:flex  relative  items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex items-center w-full mx-auto md:mx-0  border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={ placeholder || "Start your Search"}
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          className="px-5 placeholder-gray text-sm text-gray bg-transparent outline-none flex-grow"
        />
        <SearchIcon className="flex h-8 bg-red-400  text-white rounded-full p-2  cursor-pointer mx-2" />
      </div>
      <div className="hidden md:flex items-center space-x-4 justify-end text-gray-600">
        <p className="hidden lg:block">Become a host</p>
        <GlobeAltIcon className=" h-6  cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer shadow-sm">
          <MenuIcon className="h-6 " />
          <UsersIcon className="h-6 " />
        </div>
      </div>
      {Input && (
        <div className="flex flex-col col-span-3 m-auto mt-2 ">
      
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleDateChanger}
          />
      
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guest{" "}
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={Guest}
              min={1}
              onChange={(e) => setGuest(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setInput("")}
            >
              Cancle
            </button>
            <button className="flex-grow text-red-500" onClick={searchPlace}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
