/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  const length = a;
  const width = b;
  const area = a * b;
  const perimeter = 2 * (a + b);
  return { length, width, area, perimeter };
}

console.log(Rectangle(4, 5));
