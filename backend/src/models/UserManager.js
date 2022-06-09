const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  find(id) {
    return this.connection.query(
      `select id, name, email from  ${this.table} where id = ?`,
      [id]
    );
  }

  findPasswordByEmail(email) {
    return this.connection.query(
      `select password from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(`select id, name, email from  ${this.table}`);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (name, email, password) values (?, ?, ?)`,
      [user.name, user.email, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set name = ?, email = ?, password = ? where id = ?`,
      [user.name, user.email, user.password, user.id]
    );
  }
}

module.exports = UserManager;
