import * as service
from "../services/user.service.js";

export function getUsers(req, res) {

  const users =
    service.getUsers();

  res.status(200).json({
    success: true,
    data: users
  });
}

export function getUser(req, res) {

  const id = parseInt(req.params.id);

  const user =
    service.getUser(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
}

export function createUser(req, res) {

  const { name, email } = req.body;

  const user =
    service.createUser(name, email);

  res.status(201).json({
    success: true,
    data: user
  });
}

export function updateUser(req, res) {

  const id = parseInt(req.params.id);
  const data = req.body;

  const user =
    service.updateUser(id, data);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
}

export function deleteUser(req, res) {

  const id = parseInt(req.params.id);

  const success =
    service.deleteUser(id);

  if (!success) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(204).send();
} 