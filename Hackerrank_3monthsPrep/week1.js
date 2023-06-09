function plusMinus(arr) {
  const arrPositives = arr.filter((item) => item > 0);
  const arrNegatives = arr.filter((item) => item < 0);
  const arrZeros = arr.filter((item) => item === 0);
  const arrLength = arr.length;
  const arrPositivesLength = arrPositives.length;
  const arrNegativesLength = arrNegatives.length;
  const arrZerosLength = arrZeros.length;
  const arrPositivesRatio = arrPositivesLength / arrLength;
  const arrNegativesRatio = arrNegativesLength / arrLength;
  const arrZerosRatio = arrZerosLength / arrLength;
  console.log(arrPositivesRatio.toFixed(6));
  console.log(arrNegativesRatio.toFixed(6));
  console.log(arrZerosRatio.toFixed(6));
}

let arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
