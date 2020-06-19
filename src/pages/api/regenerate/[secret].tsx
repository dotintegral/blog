import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { updateCache } from "../../../utils/post-cache";
import shell from "shelljs";

const dataDir = process.cwd() + "/data/";
const repoPath = "https://github.com/dotintegral/blog-data.git";
const key = process.env.REGENERATION_KEY || "123";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { secret } = req.query;

  if (key !== secret) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "invalid secret" }));
    return;
  }

  if (fs.existsSync(dataDir)) {
    fs.rmdirSync(dataDir, { recursive: true });
  }

  fs.mkdirSync(dataDir);

  const clone = `git clone ${repoPath} ${dataDir}`;
  const result = shell.exec(clone);

  if (result.code === 0) {
    updateCache();

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "ok" }));
  } else {
    console.error(result);

    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "clone error", error: result.stderr }));
  }
};
