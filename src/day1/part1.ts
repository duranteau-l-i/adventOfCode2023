import { fileToArray } from "../getInput";

const main = (list: string[]) => {
  const numberList: number[] = list.map(word => {
    const numbers = word.match(/\d/g);
    return parseInt(`${numbers?.at(0) ?? ""}${numbers?.at(-1) ?? ""}`);
  });

  return numberList.reduce((acc, curr) => acc + curr, 0);
};

const list = fileToArray("day1/part1.txt");
const result = main(list);
console.log(result); // 54388

export default main;
