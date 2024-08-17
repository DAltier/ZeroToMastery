function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;
  While (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
}

// O(1 + n/2 + 100) -> O(n + 1) -> O(n)

printFirstItemThenFirstHalfThenSayHi100Times([1, 2, 3, 4, 5]);