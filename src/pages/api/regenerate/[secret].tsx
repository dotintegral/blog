import fs from "fs";
import simpleGit from "simple-git/promise";
import { NextApiRequest, NextApiResponse } from "next";
import { updateCache } from "../../../utils/post-cache";

const dataDir = process.cwd() + "/data/";
const repoPath = "git@github.com:dotintegral/blog-data.git";
const key = "1234567890";

const git = simpleGit(dataDir);

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { secret } = req.query;

  if (key !== secret) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "invalid secret" }));
  }

  if (fs.existsSync(dataDir)) {
    fs.rmdirSync(dataDir, { recursive: true });
  }

  fs.mkdirSync(dataDir);

  git
    .clone(repoPath, dataDir)
    .then(() => {
      updateCache();

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: "ok" }));
    })
    .catch((err) => {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: "fail" }));
    });
};
