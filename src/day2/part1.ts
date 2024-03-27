const main = (list: string[], possibleResult: { [key: string]: number }) => {
  const ids: number[] = list.map(game => {
    const [gameId, results] = game.split(": ");
    const id: string = gameId.split("Game ")[1];

    const sets = results.split("; ");

    const possible = sets.every(set =>
      set.split(", ").every(score => {
        const [num, color] = score.split(" ");
        return parseInt(num) <= possibleResult[color];
      })
    );

    return possible ? parseInt(id) : 0;
  });

  return ids.reduce((acc, curr) => acc + curr, 0);
};

export default main;
