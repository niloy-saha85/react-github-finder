export const searchUsers = async (searchText) => {
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    const users = await response.json();
    console.log('search results: ', users);
    return users.items || [];
  } catch (error) {
    console.error('Error while fetching users', error);
  }
}

export const listUsers = async (searchText) => {
  try {
    const response = await fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    const users = await response.json();
    console.log('list results: ', users);
    return users;
  } catch (error) {
    console.error('Error while fetching users', error);
  }
}