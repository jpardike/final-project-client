const url = `http://localhost:4000/api/v1/posts`;


class PostModel {

  // get all posts
  static all() {
    return fetch(url)
      .then((res) => res.json(res))
      .catch((err) => {
        console.log('Error fetching data in PostModel.all', err);
        return { user: [] };
      });
  }

  // get one post
  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in PostModel.getOne', err);
        return { post: {} };
      });
  }

  // create post
  static create(newPost) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in PostModel.create', err);
        return { message: 'Error fetching data in PostModel.create' };
      });
  }

  // update post
  static update(id, updatedPost) {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error updating data in PostModel.update', err);
      return { message: 'Error updating data in PostModel.update' };
    });
  }

  // delete post
  static destroy(id) {
    return fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error deleting data in PostModel.destroy', err);
      return { message: 'Error deleting data in PostModel.destroy' };
    });
  }

}

export default PostModel;