const mockData = require("../../mocks/hash/number4Mock.json");

const solution = (genres, plays) => {
  const genreMap = new Map();
  const muxData = [];
  const result = [];

  genres.forEach((genre, idx) => {
    if (genreMap.has(genre)) {
      const count = genreMap.get(genre);
      genreMap.set(genre, count + plays[idx]);

      muxData.push([genre, plays[idx], idx]);
    } else {
      genreMap.set(genre, plays[idx]);

      muxData.push([genre, plays[idx], idx]);
    }
  });

  const genreMapArr = [...genreMap];
  console.log("before sort", genreMapArr);

  genreMapArr.sort((a, b) => {
    return b[1] - a[1];
  });
  console.log("after sort", genreMapArr);

  genreMapArr.forEach((data) => {
    const sortData = muxData
      .filter((mux) => mux[0] === data[0])
      .sort((a, b) => {
        return b[1] - a[1];
      });
    if (sortData.length === 1) {
      result.push(sortData[0][2]);
    } else {
      result.push(sortData[0][2]);
      result.push(sortData[1][2]);
    }
  });

  console.log("result", result);

  return result;
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

mockData.data.map((data) => {
  const result = solution(data.genres, data.plays);

  printResult(result, data.result);
});
