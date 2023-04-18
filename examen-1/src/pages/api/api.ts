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
