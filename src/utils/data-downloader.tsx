import fs from "fs";
import shell from "shelljs";

const dataDir = process.cwd() + "/data/";
const repoPath = "https://github.com/dotintegral/blog-data.git";

export const downloadData = () => {
  if (fs.existsSync(dataDir)) {
    fs.rmdirSync(dataDir, { recursive: true });
  }

  fs.mkdirSync(dataDir);

  const clone = `git clone ${repoPath} ${dataDir}`;
  const result = shell.exec(clone);

  return result;
};
