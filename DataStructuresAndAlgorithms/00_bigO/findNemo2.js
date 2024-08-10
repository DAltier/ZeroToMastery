const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(10).fill('nemo');

function findNemo2(fish) {
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo2(everyone); // O(n) --> Linear Time
