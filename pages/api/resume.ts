import { NextApiRequest, NextApiResponse } from "next";
import resume from "../../resume.json";
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(JSON.stringify(resume, null, 2));
};

export default handler;
