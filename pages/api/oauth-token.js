// pages/api/oauth-token.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { GODADDY_API_KEY, GODADDY_API_SECRET } = process.env;

    const response = await axios.post(
      'https://api.godaddy.com/v1/oauth/token',
      {
        grant_type: 'client_credentials',
      },
      {
        auth: {
          username: GODADDY_API_KEY,
          password: GODADDY_API_SECRET,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching OAuth token:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch OAuth token' });
  }
}
