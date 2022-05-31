const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  static table = "card";

  insert(card) {
    return this.connection.query(
      `insert into ${CardManager.table} (title) values (?)`,
      [card.title]
    );
  }

  update(card) {
    return this.connection.query(
      `update ${CardManager.table} set title = ? where id = ?`,
      [card.title, card.id]
    );
  }
}

module.exports = CardManager;
