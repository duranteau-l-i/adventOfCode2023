import { fileToArray } from "../getInput";
import main from "./part2";

describe("DAY 1 - PART 2", () => {
  it("should return 281", () => {
    const list = [
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen"
    ];

    const result = main(list);

    expect(result).toEqual(281);
  });

  it("should return 53515", () => {
    const list = fileToArray("day1/input.txt");

    const result = main(list);

    expect(result).toEqual(53515);
  });
});
