// pages/api/hosting-plans.js
import axios from 'axios';

export default async function handler(req, res) {
  // Restrict the method to GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Destructure the environment variable
    const { GODADDY_OAUTH_TOKEN } = process.env;

    // Check if the OAuth token is provided
    if (!GODADDY_OAUTH_TOKEN) {
      return res.status(500).json({ error: 'Missing GoDaddy OAuth token in environment variables' });
    }

    // Make the API request
    const response = await axios.get('https://api.godaddy.com/v1/hosting/plans', {
      headers: {
        Authorization: `Bearer ${GODADDY_OAUTH_TOKEN}`,
        Accept: 'application/json',
      },
    });

    // Return the response data
    res.status(200).json(response.data);
  } catch (error) {
    // Handle errors and log details
    console.error('Error fetching hosting plans:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to fetch hosting plans',
      details: error.response?.data || error.message, // Optional: Include detailed error info
    });
  }
}
