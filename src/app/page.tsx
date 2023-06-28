import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { IFilterProps } from "@/types";
import { fetchCars } from "@/utils";

interface ISearchParamsProps {
  searchParams: IFilterProps;
}

// in all pages in Next.js we have access to their params
// automatically
export default async function Home({ searchParams }: ISearchParamsProps) {
  const data = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

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
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {data.map((item) => (
                <CarCard data={item} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > data.length}
            />
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
