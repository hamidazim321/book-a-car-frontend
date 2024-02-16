const saveLogin = (data) => {
  localStorage.setItem('user', JSON.stringify(data.user));
  localStorage.setItem('token', JSON.stringify(data.token));
};

const getUser = () => JSON.parse(localStorage.getItem('user'));
const getToken = () => JSON.parse(localStorage.getItem('token'));

const removeLogin = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

export {
  saveLogin, getToken, getUser, removeLogin,
};
