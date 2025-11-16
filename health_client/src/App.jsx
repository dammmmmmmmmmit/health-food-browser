import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:4000/api";

export default function App() {
  const [foods, setFoods] = useState([]);
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [diet, setDiet] = useState("");
  const [minCalories, setMinCalories] = useState("");
  const [maxCalories, setMaxCalories] = useState("");
  const [sort, setSort] = useState("");

  const fetchFoods = async (params = {}) => {
    const res = await axios.get(API, { params });
    setFoods(res.data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const applyFilter = (e) => {
    e.preventDefault();
    fetchFoods({ item, category, diet, minCalories, maxCalories, sort });
  };

  const clearFilter = () => {
    setItem("");
    setCategory("");
    setDiet("");
    setMinCalories("");
    setMaxCalories("");
    setSort("");
    fetchFoods();
  };

  return (
    <div className="min-h-screen bg-darkBg text-white pb-16">

      {/* Header */}
      <div className="bg-neonGradient p-12 shadow-neonStrong mb-10 rounded-b-[40px]">
        <h1 className="text-5xl font-extrabold text-center drop-shadow-xl tracking-wide">
            Health & Food Browser
        </h1>
        <p className="text-center opacity-90 mt-2">
          Food Exploration In Dark Dimension 
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto bg-darkCard shadow-neon p-8 rounded-3xl mb-12 border border-gray-700">

        <form
          onSubmit={applyFilter}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            placeholder=" Search food..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="p-3 rounded-xl bg-[#2c2c2c] border border-gray-600 focus:border-neonGreen text-white shadow-neon"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded-xl bg-[#2c2c2c] border border-gray-600 text-white shadow-neon"
          >
            <option value=""> All Categories</option>
            <option value="salad"> Salad</option>
            <option value="meal"> Meal</option>
            <option value="smoothie"> Smoothie</option>
            <option value="breakfast"> Breakfast</option>
          </select>

          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="p-3 rounded-xl bg-[#2c2c2c] border-gray-600 border text-white shadow-neon"
          >
            <option value=""> Diet Type</option>
            <option value="vegan">Vegan </option>
            <option value="vegetarian">Vegetarian </option>
            <option value="keto">Keto </option>
            <option value="high-protein">High Protein </option>
          </select>

          <input
            type="number"
            placeholder=" Min Calories"
            value={minCalories}
            onChange={(e) => setMinCalories(e.target.value)}
            className="p-3 rounded-xl bg-[#2c2c2c] border border-gray-600 text-white shadow-neon"
          />

          <input
            type="number"
            placeholder=" Max Calories"
            value={maxCalories}
            onChange={(e) => setMaxCalories(e.target.value)}
            className="p-3 rounded-xl bg-[#2c2c2c] border border-gray-600 text-white shadow-neon"
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="p-3 rounded-xl bg-[#2c2c2c] border border-gray-600 text-white shadow-neon"
          >
            <option value="">Sort By</option>
            <option value="calories_asc">Calories: Low → High</option>
            <option value="calories_desc">Calories: High → Low</option>
            <option value="protein_desc">Protein: High → Low</option>
          </select>

          <div className="col-span-full flex gap-6 justify-center mt-6">
            <button
              className="px-10 py-4 rounded-full font-semibold text-black shadow-neonStrong hover:scale-105 transition
              bg-neonGradient"
            >
              Apply Filters 
            </button>

            <button
              type="button"
              onClick={clearFilter}
              className="px-10 py-4 rounded-full font-semibold text-black shadow-neonStrong hover:scale-105 transition
              bg-gradient-to-r from-neonRed via-neonYellow to-neonGreen"
            >
              Clear 
            </button>
          </div>
        </form>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {foods.map((food) => (
          <div
            key={food.id}
            className="rounded-3xl p-6 bg-darkCard border border-gray-700 shadow-neon transition hover:scale-102 hover:border-neonGreen cursor-pointer"
          >
            <h2 className="text-2xl font-bold text-neonOrange drop-shadow">
              {food.name}
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-neonOrange text-black shadow-neon">
                {food.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-neonGreen text-black shadow-neon">
                {food.dietType}
              </span>
            </div>

            <p className="mt-4">
              <strong className="text-neonYellow">Calories:</strong> {food.calories}
            </p>

            <p>
              <strong className="text-neonGreen">Protein:</strong> {food.protein}g
            </p>

            <p className="text-neonRed mt-2 text-lg font-bold"> {food.rating}</p>

            <button
              className="mt-4 text-neonYellow underline text-sm hover:text-neonGreen transition"
              onClick={async () => {
                const res = await axios.get(`${API}/items/${food.id}`);
                alert(JSON.stringify(res.data, null, 2));
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
