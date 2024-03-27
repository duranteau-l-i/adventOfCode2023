import main from "./part1";

describe("DAY 1", () => {
  it("should return 77", () => {
    const list = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

    const result = main(list);

    expect(result).toEqual(142);
  });

  it("should return 77", () => {
    const list = [
      "threehqv2",
      "sxoneightoneckk9ldctxxnffqnzmjqvj",
      "1hggcqcstgpmg26lzxtltcgg",
      "nrhoneightkmrjkd7fivesixklvvfnmhsldrc",
      "zhlzhrkljonephkgdzsnlglmxvprlh6n",
      "594chhplnzsxktjmkfpninefiveczfnvsctbxcfzfzjh",
      "seven2tjf",
      "five712"
    ];

    const result = main(list);

    expect(result).toEqual(428);
  });
});
