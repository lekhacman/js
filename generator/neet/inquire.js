import { input, rawlist } from "@inquirer/prompts";
import ejs from "ejs";
import { readFile, writeFile, mkdir } from "fs/promises";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

async function main() {
  const cat = await rawlist({
    message: "Show me the cat?",
    choices: [
      { name: "Array & hashing", value: "arrays" },
      { name: "Two pointers", value: "2pointers" },
      { name: "Stack", value: "stack" },
      { name: "Binary search", value: "binarySearch" },
      { name: "Sliding window", value: "slidingWindow" },
      { name: "Linked list", value: "linkedList" },
      { name: "Trees", value: "trees" },
      { name: "Tries", value: "tries" },
      { name: "Backtracking", value: "backtracking" },
      { name: "Heap/priority queue", value: "heap" },
      { name: "Graphs", value: "graphs" },
      { name: "1-D DP", value: "1D" },
      { name: "Intervals", value: "intervals" },
      { name: "Greedy", value: "greedy" },
      { name: "Advanced graphs", value: "advancedGraphs" },
      { name: "2-D DP", value: "2D" },
      { name: "Bit manipulation", value: "bitManipulation" },
      { name: "Math & Geometry", value: "geometry" },
    ],
  });
  const problemName = await input({ message: "What's your problem?" });
  const paramName = await input({ message: "problem parameter?" });

  const [problem, problemTest] = await Promise.all(
    ["problem.ejs", "problem.test.ejs"].map((p) =>
      readFile(`generator/neet/${p}`),
    ),
  );

  const basePath = `src/neet/${cat}`;

  await mkdir(basePath, { recursive: true });
  await Promise.all(
    Object.entries({ js: problem, ["test.js"]: problemTest }).map(
      ([ext, template]) => {
        const filePath = `${basePath}/${problemName}.${ext}`;
        console.log(`Generating ${filePath}`);
        return writeFile(
          filePath,
          ejs.render(template.toString(), {
            problemName,
            paramName: paramName || "input",
          }),
        );
      },
    ),
  );
  return execPromise(`git add ${basePath}`)
}
main();
