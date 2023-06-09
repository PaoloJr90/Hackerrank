var createCounter = function (n) {
  return function () {
    return n++;
  };
};

let n = 10;

createCounter(n);
