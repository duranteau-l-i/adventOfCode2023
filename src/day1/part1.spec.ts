import { fileToArray } from "../getInput";
import main from "./part1";

describe("DAY 1", () => {
  it("should return 77", () => {
    const list = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

    const result = main(list);

    expect(result).toEqual(142);
  });

  it("should return 54388", () => {
    const list = fileToArray("day1/part1.txt");

    const result = main(list);

    expect(result).toEqual(54388);
  });
});
