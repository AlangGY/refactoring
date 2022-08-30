import { plumages, speeds } from "../birds";

describe("birds", () => {
  const birds = [
    {
      name: "1",
      type: "유럽 제비",
      numberOfCoconuts: 3,
      voltage: 80,
      isNailed: true,
    },
    {
      name: "2",
      type: "아프리카 제비",
      numberOfCoconuts: 3,
      voltage: 80,
      isNailed: true,
    },
    {
      name: "3",
      type: "아프리카 제비",
      numberOfCoconuts: 1,
      voltage: 80,
      isNailed: true,
    },
    {
      name: "4",
      type: "노르웨이 파랑 앵무",
      numberOfCoconuts: 3,
      voltage: 80,
      isNailed: true,
    },
    {
      name: "5",
      type: "노르웨이 파랑 앵무",
      numberOfCoconuts: 3,
      voltage: 120,
      isNailed: false,
    },
    {
      name: "1",
      type: "untitled",
      numberOfCoconuts: 3,
      voltage: 80,
      isNailed: true,
    },
  ];
  test("", () => {
    expect([...plumages(birds).values()]).toEqual([
      "알수 없다",
      "지쳤다",
      "보통이다",
      "예쁘다",
      "그을렸다",
    ]);

    expect([...speeds(birds).values()]).toEqual([null, 34, 38, 0, 22]);
  });
});
