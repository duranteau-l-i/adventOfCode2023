import { fileToArray } from "../getInput";
import main from "./part1";

describe("DAY 3 - PART 1", () => {
  it("should return 4361", () => {
    const list = [
      "467..114..",
      "...*......",
      "..35..633.",
      "......#...",
      "617*......",
      ".....+.58.",
      "..592.....",
      "......755.",
      "...$.*....",
      ".664.598.."
    ];

    const result = main(list);

    expect(result).toEqual(4361);
  });

  it("should return 9402", () => {
    const list = [
      ".....180.........230..........................218.....189......415.......................322....507..................206..............111...",
      "........*.602.........571-.......................*...*.............199.....$.........181.......*......980....292............................",
      "..509.923.=....................+......835*......608.984..............-.801..922.156...*.........533.....$.......*678.......&..............."
    ];

    const result = main(list);

    expect(result).toEqual(9402);
  });

  it("should return 536585", () => {
    const list = fileToArray("day3/input.txt");

    const result = main(list);

    expect(result).toEqual(536585);
  });
});
