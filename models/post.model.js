const db = require("../config/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  save() {
    let sql = `
    INSERT INTO posts (title, body)
    VALUES ('${this.title}', '${this.body}')
    `;
    return db.execute(sql);
  }

  updateOne(postId) {
    const sql = `UPDATE posts SET title='${this.title}', body='${this.body}' WHERE id=${postId}`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM posts;";
    return db.execute(sql);
  }

  static findById(postId) {
    let sql = `SELECT * FROM posts WHERE id=${postId};`;
    return db.execute(sql);
  }

  static deleteOne(postId) {
    let sql = `DELETE FROM posts WHERE id=${postId};`;
    return db.execute(sql);
  }
}

module.exports = Post;
