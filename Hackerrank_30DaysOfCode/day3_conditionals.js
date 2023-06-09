function main() {
  const N = parseInt(readLine().trim(), 10);

  if (N % 2 !== 0) {
    return console.log("Weird");
  } else if (N % 2 === 0 && N >= 2 && N <= 5) {
    return console.log("Not Weird");
  } else if (N % 2 === 0 && N >= 6 && N <= 20) {
    return console.log("Weird");
  } else if (N % 2 === 0 && N > 20) {
    return console.log("Not Weird");
  }
}
