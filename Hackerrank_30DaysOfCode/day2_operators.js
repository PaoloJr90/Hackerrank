/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  const tip = (tip_percent / 100) * meal_cost;
  const tax = (tax_percent / 100) * meal_cost;
  console.log(Math.round(meal_cost + tip + tax));
}
