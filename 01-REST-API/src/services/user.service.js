import * as repository
from "../repositories/user.repository.js";

export function getUsers() {
  return repository.findAll();
}

export function getUser(id) {
  return repository.findById(id);
}

export function createUser(name, email) {

  const user = {
    id: Date.now(),
    name,
    email
  };

  return repository.create(user);
}

export function updateUser(id, data) {
  return repository.update(id, data);
}

export function deleteUser(id) {
  return repository.remove(id);
}