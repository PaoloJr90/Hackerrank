function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  let arrReverse = arr.reverse();

  let string = "";
  for (let i = 0; i < n; i++) {
    string += arrReverse[i] + " ";
  }
  console.log(string);
}
