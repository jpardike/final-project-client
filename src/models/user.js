const url = `http://localhost:4000/api/v1/users`;


class UserModel {

  // get all users
  static all() {
    return fetch(url)
      .then((res) => res.json(res))
      .catch((err) => {
        console.log('Error fetching data in UserModel.all', err);
        return { user: [] };
      });
  }

  // get one user
  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in UserModel.getOne', err);
        return { user: {} };
      });
  }

  static login(email) {
    return fetch(`${url}/ login/${email}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in UserModel.login', err);
        return { user: {} };
      });
  }

  // create user
  static create(newUser) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in UserModel.create', err);
        return { message: 'Error fetching data in UserModel.create' };
      });
  }

  // update user
  static update(id, updatedUser) {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error updating data in UserModel.update', err);
      return { message: 'Error updating data in UserModel.update' };
    });
  }

  // delete user
  static destroy(id) {
    return fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error deleting data in UserModel.destroy', err);
      return { message: 'Error deleting data in UserModel.destroy' };
    });
  }

}

export default UserModel;