const saveLogin = (res) => {
  const { user, token } = {
    user: res.data.data.user,
    token: res.headers.authorization,
  };
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', JSON.stringify(token));
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
