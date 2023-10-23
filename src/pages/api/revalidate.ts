// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidate: boolean;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ revalidate: false, message: "Insert a corret token" });
  }
  if (req.query.data === "product") {
    try {
      await res.revalidate("/product/static");
      return res.json({ revalidate: true });
    } catch (error) {
      return res.status(500).send({ revalidate: false });
    }
  }
  return res.json({
    revalidate: false,
    message: "Select your data to revalidate.",
  });
}
