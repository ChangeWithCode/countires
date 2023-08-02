import Search from "./Search";
import { useContext } from "react";
import { SearchContext } from "../App";
const Navigation = ({ setText , setSort }) => {


  const contextValues = useContext(SearchContext);

  return (
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="rounded-lg bg-black px-4 py-6 md:py-8 lg:py-12">
          <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
            Welcome!
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-white md:text-lg">
            Collections of Countries
          </p>

          <Search setText={setText}></Search>

          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="rounded-lg">
              <div className="mt-4">
                <select
                  value={contextValues.sorting} onChange={(e) => {setSort(e.target.value)}}
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                >
                  <option >Sort By Population</option>
                  <option value="asc">High to Low</option>
                  <option value="desc">Low to High </option>
                </select>
              </div>
            </div>
            <div class=" rounded-lg ">
              <div className="mt-4">
                <select
                  name="email"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                >
                  <option value="">Please select</option>
                  <option value="JM">John Mayer</option>
                  <option value="SRV">Stevie Ray Vaughn</option>
                  <option value="JH">Jimi Hendrix</option>
                  <option value="BBK">B.B King</option>
                  <option value="AK">Albert King</option>
                  <option value="BG">Buddy Guy</option>
                  <option value="EC">Eric Clapton</option>
                </select>
              </div>
            </div>
            <div class="rounded-lg">
              <div className="mt-4">
                <select
                  name="email"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                >
                  <option value="">Please select</option>
                  <option value="JM">John Mayer</option>
                  <option value="SRV">Stevie Ray Vaughn</option>
                  <option value="JH">Jimi Hendrix</option>
                  <option value="BBK">B.B King</option>
                  <option value="AK">Albert King</option>
                  <option value="BG">Buddy Guy</option>
                  <option value="EC">Eric Clapton</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
