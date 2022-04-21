const getUrl = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error while fetching: ', error);
  }
}

export const searchUsers = async (searchText) => {
  const url = `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  const users = await getUrl(url);
  return users.items || [];
}

export const listUsers = async () => {
  const url = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  return getUrl(url);
}

export const getUserProfile = async (login) => {
  const url = `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  return getUrl(url);
}
