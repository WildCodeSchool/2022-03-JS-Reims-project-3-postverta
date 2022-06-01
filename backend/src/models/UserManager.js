const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (name) values (?)`,
      [user.name]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set name = ? where id = ?`,
      [user.name, user.id]
    );
  }
}

module.exports = UserManager;
