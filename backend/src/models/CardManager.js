const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  static table = "card";

  insert(card) {
    return this.connection.query(
      `insert into ${CardManager.table} (name) values (?)`,
      [card.name]
    );
  }

  update(card) {
    return this.connection.query(
      `update ${CardManager.table} set name = ? where id = ?`,
      [card.name, card.id]
    );
  }
}

module.exports = CardManager;
