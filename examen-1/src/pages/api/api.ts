import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const getRepositories = async (username: string) => {
  const url = `${GITHUB_API_BASE_URL}/users/${username}/repos`;
  const response = await axios.get(url);
  return response.data;
};

getRepositories('FloresAnders');
