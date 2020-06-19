import fs from "fs";
import simpleGit from "simple-git/promise";
import { NextApiRequest, NextApiResponse } from "next";
import { updateCache } from "../../../utils/post-cache";

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

  simpleGit(dataDir)
    .clone(repoPath, dataDir)
    .then(() => {
      updateCache();

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: "ok" }));
    })
    .catch((err: Error) => {
      console.error(err);

      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: "clone error", error: err.message }));
    });
};
