const UserService = require('../services/userServices');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await UserService.getUserById(id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async addUser(req, res) {
    const userData = req.body;
    try {
      const userId = await UserService.addUser(userData);
      res.status(201).json({ id: userId, message: 'User added successfully.' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const success = await UserService.updateUser(id, updatedData);
      if (success) {
        res.json({ message: 'User updated successfully.' });
      } else {
        res.status(404).json({ message: 'User not found.' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const success = await UserService.deleteUser(id);
      if (success) {
        res.json({ message: 'User deleted successfully.' });
      } else {
        res.status(404).json({ message: 'User not found.' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async searchUser(req, res) {
    const { query } = req.query;
    try {
      const searchResults = await UserService.searchUser(query);
      res.json(searchResults);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async loginUser(req, res) {
    const { email, senha } = req.body;

    try {
      const user = await UserService.loginUser(email, senha);
      res.status(200).json({ message: 'Login successful!', user });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(401).json({ message: 'Invalid email or password.' });
    }
  }
}

module.exports = UserController;
