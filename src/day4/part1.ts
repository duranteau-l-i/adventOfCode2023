const main = (list: string[]) => {
  const result = list.map(game => {
    const [, results] = game.split(": ");

    const [winningNumbers, playerNumbers] = results.split(" | ");
    const winningNumberList = winningNumbers.split(" ");
    const playerNumberList = playerNumbers.split(" ");

    const points = playerNumberList
      .filter(num => num && winningNumberList.includes(num))
      .reduce((acc, _, index) => {
        return index === 0 ? 1 : acc * 2;
      }, 0);

    return points;
  });

  return result.reduce((acc, curr) => acc + curr, 0);
};

export default main;
