import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
const Search = ({ searchResult }) => {
  const router = useRouter();
  const { location, endDate, Guest, startDate } = router.query;
  const formatStartDate = format(new Date(startDate), "dd MMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formatStartDate} ${formatEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${Guest}`} />
      <main className="flex flex-col xl:flex-row">
        <section className="flex-grow px-4 pt-14">
          <p className="text-xs ">
            300+ stays {range} for {Guest} guest
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap mb-5">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Types of Places </p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More Features</p>
          </div>
          <div className="flex flex-col">
            {searchResult?.map(
              ({ img, title, description, price, total, location, star }) => (
                <InfoCard
                  img={img}
                  key={img}
                  price={price}
                  title={title}
                  description={title}
                  location={location}
                  star={star}
                  description={description}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className=" hidden  xl:inline-flex xl:min-w-[600px]  ">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
export async function getServerSideProps(context) {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: { searchResult },
  };
}
