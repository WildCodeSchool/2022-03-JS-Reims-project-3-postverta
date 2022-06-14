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
    return this.connection.query(
      `select id, name, pseudo, birthdate, gender, email from  ${this.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (name, pseudo, birthdate, gender, email, password) values (?, ?, ?, ?, ?, ?)`,
      [
        user.name,
        user.pseudo,
        user.birthdate,
        user.gender,
        user.email,
        user.password,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set name = ?, pseudo = ? birthdate = ?, gender = ?, email = ?, password = ? where id = ?`,
      [
        user.name,
        user.pseudo,
        user.birthdate,
        user.gender,
        user.email,
        user.password,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
