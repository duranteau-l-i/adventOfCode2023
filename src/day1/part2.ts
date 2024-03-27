const numberInLetter = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

const main = (list: string[]) => {
  const numberList: number[] = list.map(word => {
    const numbers =
      [
        ...word.matchAll(
          /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g
        )
      ] ?? [];

    const convertedToNumber = numbers.map(el =>
      isNaN(parseInt(el[1]))
        ? numberInLetter.indexOf(el[1]) + 1
        : parseInt(el[1])
    );

    return parseInt(
      `${convertedToNumber?.at(0) ?? ""}${convertedToNumber?.at(-1) ?? ""}`
    );
  });

  return numberList.reduce((acc, curr) => acc + curr, 0);
};

export default main;
