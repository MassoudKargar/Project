// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(res.statusCode).json({ name: 'John Doe' });
}
