import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../App";
import axios from "axios";
import Image from "./Image";
import Titles from "./Titles";
import Data from "./Data";
import Pagination from "../Pagination";
import BackToTopButton from "../backToTop";

const All = () => {
  const contextValues = useContext(SearchContext);

  const [total, setTotalPages] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [countriesDataTemp, setCountriesDataTemp] = useState([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      const allCountriesData = response.data;

      setData(allCountriesData);
      dataFilter(currentPage, 10, contextValues.sorting, allCountriesData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const dataFilter = (page, pageSize, type, data, continents) => {
    console.log(continents);
    let filteredData = [...data];
    if (continents && continents.length > 0 && continents != "All") {
      filteredData = data.filter((country) =>
        country.region.toLowerCase().includes(continents.toLowerCase())
      );
    }

    const sortedData = filteredData.sort((a, b) => {
      if (type === "asc") {
        return b.population - a.population;
      } else {
        return a.population - b.population;
      }
    });

    if (continents) {
      console.log(continents);
    }
    const totalPages = Math.ceil(sortedData.length / pageSize);
    // Calculate the start and end indices for the current page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Get the data for the current page
    const countriesDataForCurrentPage = sortedData.slice(startIndex, endIndex);

    setCountriesDataTemp(countriesDataForCurrentPage);

    setCountriesData(sortedData);
    setFilteredCountriesData(countriesDataForCurrentPage);
    // Optionally, you can also set the total number of pages in your state for further use.
    setTotalPages(totalPages);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dataFilter(
      currentPage,
      10,
      contextValues.sorting,
      data,
      contextValues.continents
    );
  }, [currentPage, contextValues]);

  const filterCountriesByName = (searchQuery) => {
    if (contextValues.text === "") {
      setFilteredCountriesData(countriesDataTemp);
    } else {
      searchQuery = searchQuery?.toLowerCase();
      const results = countriesData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );

      setFilteredCountriesData(results);
    }
  };

  const handlePrevios = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    filterCountriesByName(contextValues.text);
  }, [contextValues.text]);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto">
            <div className="flex flex-wrap -m-4">
              {filteredCountriesData?.map((item) => {
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

            <Pagination
              handlePrevios={handlePrevios}
              handleNext={handleNext}
              currentPage={currentPage}
              total={total}
            ></Pagination>
          </div>
        </section>
      </div>
      <BackToTopButton></BackToTopButton>
    </div>
  );
};

export default All;
