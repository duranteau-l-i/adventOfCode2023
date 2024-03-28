const main = (list: string[]) => {
  let ratios: number[] = [];

  list.forEach((line: string, index: number) => {
    const lineArray = line.split("");
    const lineLength = lineArray.length;

    let valueTop = [];
    let valueLine = [];
    let valueBottom = [];

    for (let i = 0; i < lineLength; i++) {
      if (line[i] === "*") {
        if (!isNaN(+line[i - 1]) || !isNaN(+line[i + 1])) {
          if (getLeftNumber(line, i)) valueLine.push(getLeftNumber(line, i));
          if (getRightNumber(line, i)) valueLine.push(getRightNumber(line, i));
        }

        const values = [
          ...getValue(list[index - 1], i),
          ...getValue(list[index + 1], i),
          ...valueLine
        ];

        if (values.length === 2) {
          ratios = [
            ...ratios,
            values.reduce((acc, curr) => acc * parseInt(curr), 1)
          ];
        }

        valueTop = [];
        valueLine = [];
        valueBottom = [];
      }
    }
  });

  return ratios.reduce((acc, curr) => acc + curr, 0);
};

const getValue = (line: string, i: number) => {
  const value: any[] = [];

  const valueMiddle = getMiddleNumber(line, i);
  if (valueMiddle) {
    value.push(valueMiddle);
  } else {
    if (getLeftNumber(line, i)) value.push(getLeftNumber(line, i));
    if (getRightNumber(line, i)) value.push(getRightNumber(line, i));
  }

  return value;
};

const getMiddleNumber = (line: string, i: number): string => {
  let value = "";

  if (!line || isNaN(+line[i])) return value;

  if (!isNaN(+line[i]) && isNaN(+line[i - 1]) && isNaN(+line[i + 1]))
    return `${line[i]}`;
  if (!isNaN(+line[i - 1]) && !isNaN(+line[i]) && !isNaN(+line[i + 1]))
    return `${line[i - 1]}${+line[i]}${line[i + 1]}`;

  return value;
};

const getLeftNumber = (line: string, i: number): string => {
  let value = "";

  if (!line) return value;
  if (!isNaN(+line[i]) && !isNaN(+line[i + 1])) return value;

  if (!isNaN(+line[i])) value = line[i];

  let j = i - 1;

  while (!isNaN(+line[j])) {
    value = `${line[j]}${value}`;
    j--;
  }

  return value;
};

const getRightNumber = (line: string, i: number): string => {
  let value = "";

  if (!line) return value;
  if (!isNaN(+line[i]) && !isNaN(+line[i - 1])) return value;

  if (!isNaN(+line[i])) value += line[i];

  let j = i + 1;

  while (!isNaN(+line[j])) {
    value += line[j];
    j++;
  }

  return value;
};

export default main;
