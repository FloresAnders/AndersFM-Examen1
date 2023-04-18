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
