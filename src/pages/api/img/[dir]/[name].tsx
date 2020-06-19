import fs from "fs";
import util from "util";
import { NextApiResponse, NextApiRequest } from "next";

const readFile = util.promisify(fs.readFile);

const imgDir = process.cwd() + "/data/img/";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { dir, name } = req.query;

  readFile(imgDir + dir + "/" + name)
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
