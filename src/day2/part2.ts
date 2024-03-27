const main = (list: string[]) => {
  const powers: number[] = list.map(game => {
    const [, results] = game.split(": ");

    const minimumSet: { [key: string]: number } = { red: 0, green: 0, blue: 0 };

    const sets = results.split("; ");

    sets.forEach(set =>
      set.split(", ").forEach(score => {
        const [num, color] = score.split(" ");
        if (parseInt(num) > minimumSet[color])
          minimumSet[color] = parseInt(num);
      })
    );

    return Object.values(minimumSet).reduce((acc, curr) => acc * curr, 1);
  });

  return powers.reduce((acc, curr) => acc + curr, 0);
};

export default main;
