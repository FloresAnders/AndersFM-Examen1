import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const getRepositories = async (username: string, token: string) => {
  const url = `${GITHUB_API_BASE_URL}/users/${username}/repos`;
  const headers = {
    Authorization: `token ${token}`,
  };
  const response = await axios.get(url, { headers });
  return response.data;
};

getRepositories('FloresAnders', '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');
