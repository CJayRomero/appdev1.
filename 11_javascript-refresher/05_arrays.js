// Favorite foods
let foods = ["Pizza", "Burger", "Pasta"];

// Add at the end
foods.push("Fries");

// Remove first food
foods.shift();

// Print using for...of
for (let food of foods) {
    console.log(food);
}

// Map to new array
let likedFoods = foods.map(f => `I like ${f}`);
console.log(likedFoods);

