const saveLogin = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getLogin = () => JSON.parse(localStorage.getItem('user'));

const removeLogin = () => {
  localStorage.removeItem('user');
};

export { saveLogin, getLogin, removeLogin };
