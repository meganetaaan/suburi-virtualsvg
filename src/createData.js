const fs = require('fs');
const randomBetween = function randomBetween(from, to) {
  return Math.random() * (to - from) + from;
};

const randomIn = function randomIn(arr) {
  const i = Math.floor(randomBetween(0, arr.length));
  return arr[i];
};

const elems = [];

const getRandomElem = i=> {
  return {
    id: i,
    pos: {
      x: randomBetween(0, 90000),
      y: randomBetween(0, 100)
    },
    size: {
      width: randomBetween(10, 100),
      height: randomBetween(10, 100)
    },
    color: randomIn(['red', 'blue', 'yellow', 'green'])
  }
};

for(var i = 0; i < 100000; i++){
  elems.push(getRandomElem(i));
}

fs.writeFileSync('data.json', JSON.stringify(elems));
