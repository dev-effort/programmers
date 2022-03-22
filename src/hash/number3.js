const mockData = require("../../mocks/hash/number3Mock.json");

const solution = (clothes, result) => {
  const map = new Map();
  clothes.forEach((cloth) => {
    const count = map.get(cloth[1]);

    if (map.has(cloth[1])) {
      map.set(cloth[1], count + 1);
    } else {
      map.set(cloth[1], 1);
    }
  });

  const clothMap = [...map];

  console.log("clothMap:", clothMap);
};

mockData.data.forEach((data) => solution(data.clothes, data.result));
