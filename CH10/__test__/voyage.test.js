import { rating } from "../voyage";

describe("voyage", () => {
  test("", () => {
    const voyage = { zone: "서인도", length: 10 };
    const history = [
      {
        zone: "동인도",
        profit: 5,
      },
      { zone: "서인도", profit: 15 },
      { zone: "중국", profit: -2 },
      { zone: "서아프리카", profit: 7 },
    ];

    const myRating = rating(voyage, history);
    expect(myRating).toBe("B");
  });
});
