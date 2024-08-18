function compressBoxesTwice(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}

compressBoxesTwice([1, 2, 3, 4, 5]); // O(n)
