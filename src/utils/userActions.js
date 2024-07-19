// userActions.js

const USERS_KEY = 'users';

export const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user) => {
  const users = getUsers();
  if (user.id) {
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      users[index] = user;
    }
  } else {
    user.id = Date.now(); // Generate a unique ID
    users.push(user);
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const deleteUser = (id) => {
  let users = getUsers();
  users = users.filter(user => user.id !== id);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};
