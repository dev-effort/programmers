const mockData = require("../../mocks/hash/number1Mock.json");

const solution = (participant, completion) => {
  let participantMap = new Map();
  participant.forEach((user) => {
    if (participantMap.has(user)) {
      let count = participantMap.get(user);
      participantMap.set(user, count + 1);
    } else {
      participantMap.set(user, 1);
    }
  });

  completion.forEach((user) => {
    let count = participantMap.get(user);
    participantMap.set(user, count - 1);
  });

  for (let [k, v] of participantMap) {
    if (v === 1) return k;
  }

  mockData.data.map((data) => {
    const result = solution(data.participant, data.completion);
    if (result === data.result) {
      console.log(`예상되는 결과: ${data.result}와 결과값이 같습니다`);
    } else {
      console.log(
        `예상되는 결과: ${data.result}, 결과값: ${result}로 다릅니다`
      );
    }
  });
};
