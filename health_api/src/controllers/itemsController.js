const { foodItems } = require("../data");

function getItems(req, res) {
  let results = [...foodItems];

  const { item, category, diet, minCalories, maxCalories, sort } = req.query;

  if (item) {
    const t = item.toLowerCase();
    results = results.filter(f => f.name.toLowerCase().includes(t));
  }

  if (category) {
    results = results.filter(f => f.category === category);
  }

  if (diet) {
    results = results.filter(f => f.dietType === diet);
  }

  if (minCalories) {
    results = results.filter(f => f.calories >= Number(minCalories));
  }

  if (maxCalories) {
    results = results.filter(f => f.calories <= Number(maxCalories));
  }

  if (sort === "calories_asc") results.sort((a,b)=>a.calories - b.calories);
  if (sort === "calories_desc") results.sort((a,b)=>b.calories - a.calories);
  if (sort === "protein_desc") results.sort((a,b)=>b.protein - a.protein);

  res.json(results);
}

function getItemById(req, res) {
  const id = Number(req.params.id);
  const item = foodItems.find(f => f.id === id);
  if (!item) return res.status(404).json({ error: "Food item not found" });
  res.json(item);
}

module.exports = { getItems, getItemById };
