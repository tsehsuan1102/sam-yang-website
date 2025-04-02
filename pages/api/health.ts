import { NextApiRequest, NextApiResponse } from 'next';
import { checkHealth } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const result = await checkHealth();
    res.status(200).json(result);
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({ error: 'Failed to check health' });
  }
}
