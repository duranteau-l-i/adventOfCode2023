const main = (list: string[]) => {
  const numberList: number[] = list.map(word => {
    const numbers = word.match(/\d/g);
    return parseInt(`${numbers?.at(0) ?? ""}${numbers?.at(-1) ?? ""}`);
  });

  return numberList.reduce((acc, curr) => acc + curr, 0);
};

export default main;
