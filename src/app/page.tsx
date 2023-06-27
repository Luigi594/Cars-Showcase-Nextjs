import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";

export default async function Home() {
  const data = await fetchCars();
  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;

  return (
    <main className="overflow-hidden">
      <HeroSection />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              <CarCard data={data} />
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no results available
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
