const main = (list: string[]) => {
  const symbols = [
    ...new Set(
      list.flatMap(line =>
        line
          .split("")
          .map(el => (isNaN(+el) && el !== "." ? el : null))
          .filter(Boolean)
      )
    )
  ];

  let nums: number[] = [];

  list.forEach((line: string, index: number) => {
    let number = "";
    let start = 0;

    const lineArray = line.split("");
    const lineLength = lineArray.length;

    for (let i = 0; i < lineLength; i++) {
      if (
        !isNaN(+lineArray[i]) &&
        (!isNaN(+line[i - 1]) || !isNaN(+line[i + 1]))
      ) {
        if (!number) start = i;
        number += lineArray[i];
      } else {
        if (number) {
          for (let j = start - 1; j < i + 1; j++) {
            if (
              symbols.includes(line[start - 1]) ||
              symbols.includes(line[i]) ||
              (list[index - 1] && symbols.includes(list[index - 1][j])) ||
              (list[index + 1] && symbols.includes(list[index + 1][j]))
            ) {
              nums.push(parseInt(number));
              number = "";
              break;
            }
          }
          number = "";
        }
      }
    }
  });

  return nums.reduce((acc, curr) => acc + curr, 0);
};

export default main;
