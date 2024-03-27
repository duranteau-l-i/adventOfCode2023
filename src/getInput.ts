import * as fs from "fs";
import * as path from "path";

export const fileToArray = (filePath: string): string[] => {
  return fs
    .readFileSync(path.join(__dirname, filePath), {
      encoding: "utf8"
    })
    .split("\n");
};
