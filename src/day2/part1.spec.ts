import { fileToArray } from "../getInput";
import main from "./part1";

describe("DAY 2 - PART 1", () => {
  it("should return 8", () => {
    const list = [
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
    ];

    const result = main(list, { red: 12, green: 13, blue: 14 });

    expect(result).toEqual(8);
  });

  it("should return 2545", () => {
    const list = fileToArray("day2/input.txt");

    const result = main(list, { red: 12, green: 13, blue: 14 });

    expect(result).toEqual(2545);
  });
});
