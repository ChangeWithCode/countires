import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";
import Titles from "./Titles";
import Data from "./Data";

const All = () => {
  const [search, setSearch] = useState({
    searchQuery: "",
  });

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountriesData(response.data);
      setFilteredCountriesData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const  filterCountriesByName = (searchQuery) => {
    searchQuery = searchQuery?.toLowerCase();
    const results = countriesData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );

    setFilteredCountriesData(results);
  }

  useEffect(() => {
    filterCountriesByName(search.searchQuery);
  }, [search.searchQuery, countriesData]);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
              Collections of Countries
            </h2>

            <div className="mx-auto max-w-lg rounded-lg border">
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                    Search
                  </label>
                  <input
                    type="text"
                    name="searchQuery"
                    value={search.searchQuery}
                    onChange={handleChange}
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto">
            <div className="flex flex-wrap -m-4">
              {filteredCountriesData.map((item) => {
                return (
                  <div key={item.alpha3Code} className="p-4 md:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <Image image={item.flags.png}></Image>
                      <Titles
                        heading={item.alpha3Code}
                        subHeading={item.name}
                      ></Titles>
                      <Data heading="Capital" subHeading={item.capital}></Data>
                      <Data heading="Region" subHeading={item.region}></Data>
                      <Data
                        heading="Languages"
                        subHeading={item.languages && item.languages[0].name}
                      ></Data>
                      <Data
                        heading="Population"
                        subHeading={item.population}
                      ></Data>
                      <Data
                        heading="TimeZones"
                        subHeading={item.timezones}
                      ></Data>
                      <Data
                        heading="Native Name"
                        subHeading={item.nativeName}
                      ></Data>
                      <Data
                        heading="Currencies"
                        subHeading={item.currencies && item.currencies[0].code}
                      ></Data>
                      <Data
                        heading="Currencies Symbol"
                        subHeading={
                          item.currencies && item.currencies[0].symbol
                        }
                      ></Data>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default All;
