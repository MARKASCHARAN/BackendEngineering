import users from "../data/user.js";

export function findAll() {
  return users;
}

export function findById(id) {
  return users.find(user => user.id === id);
}

export function create(user) {
  users.push(user);
  return user;
}

export function update(id, data) {
  const user = findById(id);

  if (!user) return null;

  Object.assign(user, data);

  return user;
}

export function remove(id) {
  const index =
    users.findIndex(user => user.id === id);

  if (index === -1) return false;

  users.splice(index, 1);

  return true;
}