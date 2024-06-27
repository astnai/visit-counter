import { NextApiRequest, NextApiResponse } from "next";

let visitCount = 0;

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ visitCount });
  } else if (req.method === "POST") {
    visitCount += 1;
    res.status(200).json({ visitCount });
  } else {
    res.status(405).end();
  }
}
