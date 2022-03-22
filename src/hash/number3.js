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
  const addCloth = clothMap.map((data) => {
    return data[1] + 1;
  });

  const sol = addCloth.reduce((acc, cur) => (acc = acc * cur));

  console.log("result: ", result, " solution: ", sol - 1);
  return sol - 1;
};

mockData.data.forEach((data) => solution(data.clothes, data.result));
