const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  static table = "card";

  findByUser(userId) {
    return this.connection.query(
      `select * from  ${CardManager.table} inner join card_user on card.id = card_user.card_id where user_id = ?`,
      [userId]
    );
  }

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
