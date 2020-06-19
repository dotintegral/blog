import fs from "fs";
import util from "util";
import { NextApiResponse, NextApiRequest } from "next";

const readFile = util.promisify(fs.readFile);

const imgDir = process.cwd() + "/data/posts/";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { post, name } = req.query;

  readFile(imgDir + post + "/" + name)
    .then((data) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpeg");
      res.send(data);
    })
    .catch(() => {
      res.statusCode = 404;
      res.send("");
    });
};
