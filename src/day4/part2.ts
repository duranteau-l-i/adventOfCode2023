const main = (list: string[]) => {
  const games: number[] = list.map(() => 0);

  list.forEach(game => {
    const [cardId, results] = game.split(": ");
    const numberMatch = cardId.match(/\d/g);

    const id = numberMatch
      ? parseInt(
          numberMatch?.reduce((acc: string, curr: string) => acc + curr, "")
        )
      : 0;

    const [winningNumbers, playerNumbers] = results.split(" | ");
    const winningNumberList = winningNumbers.split(" ");
    const playerNumberList = playerNumbers.split(" ");

    const points = playerNumberList.filter(
      num => num && winningNumberList.includes(num)
    );

    games[id - 1] += 1;

    for (let i = 0; i < games[id - 1]; i++) {
      for (let j = 0; j < points.length; j++) {
        games[id + j] += 1;
      }
    }
  });

  return games.filter(Boolean).reduce((acc, curr) => acc + curr, 0);
};

export default main;
