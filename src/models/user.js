const url = `http://localhost:4000/api/v1/users`;


class UserModel {
  static all() {
    return fetch(url)
      .then((res) => res.json(res))
      .catch((err) => {
        console.log('Error fetching data in UserModel.all', err);
        return { user: [] };
      });
  }

  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in UserModel.getOne', err);
        return { user: {} };
      });
  }

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
}

export default UserModel;