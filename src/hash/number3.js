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

  return sol - 1;
};

const printResult = (result, answer) => {
  if (Array.isArray(result)) {
    if (JSON.stringify(result) === JSON.stringify(answer)) {
      console.log(`예상되는 결과: ${answer}와 결과값이 같습니다`);
    } else {
      console.log(`예상되는 결과: ${answer} 결과값: ${result}로 다릅니다`);
    }
  } else {
    if (result === answer) {
      console.log(`예상되는 결과: ${answer}와 결과값이 같습니다`);
    } else {
      console.log(`예상되는 결과: ${answer} 결과값: ${result}로 다릅니다`);
    }
  }
};

mockData.data.forEach((data) => {
  const result = solution(data.clothes, data.result);
  printResult(result, data.result);
});
